// Atoms Components
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";

// Molecules Components
import ModalLayout from "../molecules/ModalLayout";
import Timer from "../molecules/Timer";
import ExerciseContent from "../molecules/ExerciseContent";

// Organisms Components
import SetRow from "./SetRow";

// External Dependencies
import { useEffect, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

// Store
import { useAuthStore } from "@/store/useAuthStore";
import { useReferenceStore } from "@/store/useReferenceStore";
import { SectionType, useProgramStore } from "@/store/useProgramStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { TaskModalStyles } from "@/styles/components/organisms/TaskModal.styles";

// Props Type
type TaskModalProps = {
  task: any;
  visible: boolean;
  day: string;
  section: SectionType;
  onClose: () => void;
};

type TimerMode = "idle" | "exercise" | "rest";

const TaskModal = ({
  task,
  visible,
  day,
  section,
  onClose,
}: TaskModalProps) => {
  const { user } = useAuthStore();
  const { updateTaskStatus, updateTaskSetsTime } = useProgramStore();
  const { getExercise } = useReferenceStore();
  const router = useRouter();
  const [mode, setMode] = useState<TimerMode>("idle");
  const [seconds, setSeconds] = useState<number>(0);
  const [startTimestamp, setStartTimestamp] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const exercise = useMemo(() => {
    return getExercise(task?.exerciseId);
  }, [task?.exerciseId]);

  const isWorkoutActive = useMemo(() => {
    return task?.status === "progress" || task?.status === "completed";
  }, [task?.status]);

  const currentSetIndex = useMemo(() => {
    if (!task?.setsTime) return 0;
    const index = task.setsTime.findIndex(
      (time: number) => time === undefined || time === 0,
    );
    return index === -1 ? task.sets : index;
  }, [task?.setsTime, task?.sets]);

  useEffect(() => {
    if (mode === "rest") {
      intervalRef.current = setInterval(() => {
        setSeconds((previous) => {
          if (previous <= 1) {
            clearInterval(intervalRef.current!);
            setMode("idle");
            return 0;
          }
          return previous - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [mode]);

  useEffect(() => {
    if (!visible) {
      setMode("idle");
      setSeconds(0);
    }
  }, [visible]);

  const getTaskDescription = () => {
    return `${exercise?.isStatic ? `ВРЕМЯ ВЫПОЛНЕНИЯ: ${task?.duration}` : `ПОВТОРЕНИЯ: ${task?.reps}`} / ПОДХОДЫ: ${task?.sets} / ОТДЫХ: ${task?.rest} сек`;
  };

  const onClickStartSet = () => {
    setStartTimestamp(Date.now());
    setMode("exercise");
  };

  const onClickStopSet = async () => {
    const finalSeconds = Math.round((Date.now() - startTimestamp) / 1000);
    const activeIndex = currentSetIndex;
    setMode("idle");

    await updateTaskSetsTime(
      day,
      section,
      task?.exerciseId,
      activeIndex,
      finalSeconds,
    );

    if (activeIndex + 1 >= task?.sets) {
      await updateTaskStatus(day, section, task?.exerciseId, "completed");
      setSeconds(0);
    } else {
      setSeconds(task?.rest || 0);
      setMode("rest");
    }
  };

  const onClickExercisePerforming = async () => {
    await updateTaskStatus(day, section, task?.exerciseId, "progress");
  };

  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <ExerciseContent
        name={exercise?.name}
        video={exercise?.video}
        taskDescription={getTaskDescription()}
        exerciseDescription={exercise?.description}
        muscleCategories={exercise?.muscleCategories}
        modalVisible={visible}
      />

      {!user && (
        <Button type="gradient" onPress={() => router.navigate("/signin")}>
          <Typography type="key" style={GlobalStyles.textDark}>
            СОХРАНИТЬ ПРОГРАММУ
          </Typography>
        </Button>
      )}

      {user && !isWorkoutActive && task?.status !== "completed" && (
        <Button type="gradient" onPress={onClickExercisePerforming}>
          <Typography type="key" style={GlobalStyles.textDark}>
            ВЫПОЛНИТЬ УПРАЖНЕНИЕ
          </Typography>
        </Button>
      )}

      {user && isWorkoutActive && (
        <>
          <Typography type="subtitle" style={GlobalStyles.textCenter}>
            ПОДХОДЫ
          </Typography>

          <View style={GlobalStyles.elementsGap}>
            {Array.from({ length: task?.sets || 0 }).map(
              (set: any, index: number) => (
                <SetRow
                  key={index}
                  number={index + 1}
                  time={task?.setsTime?.[index] || 0}
                  target={exercise?.isStatic ? task?.duration : task?.reps}
                  isStatic={exercise?.isStatic || false}
                  isActive={currentSetIndex === index && mode === "exercise"}
                />
              ),
            )}
          </View>

          {mode === "idle" && task?.status !== "completed" && (
            <Button type="gradient" onPress={onClickStartSet}>
              <Typography type="key" style={GlobalStyles.textDark}>
                НАЧАТЬ ПОДХОД
              </Typography>
            </Button>
          )}

          {mode === "exercise" && task?.status !== "completed" && (
            <Button type="gradient" onPress={onClickStopSet}>
              <Typography type="key" style={GlobalStyles.textDark}>
                ЗАВЕРШИТЬ ПОДХОД
              </Typography>
            </Button>
          )}

          {mode === "rest" && task?.status !== "completed" && (
            <View style={TaskModalStyles.taskModalRest}>
              <Typography type="key">ОТДЫХ:</Typography>
              <Timer seconds={seconds} />
            </View>
          )}
        </>
      )}
    </ModalLayout>
  );
};

export default TaskModal;
