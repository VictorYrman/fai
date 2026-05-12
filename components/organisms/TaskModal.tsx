// Atoms Components
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";

// Molecules Components
import ModalLayout from "../molecules/ModalLayout";
import ExerciseContent from "../molecules/ExerciseContent";

// External Dependencies
import { useMemo } from "react";
import { useRouter } from "expo-router";

// Store
import { useReferenceStore } from "@/store/useReferenceStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

// Props Type
type TaskModalProps = {
  task: any;
  visible: boolean;
  onClose: () => void;
};

const TaskModal = ({ task, visible, onClose }: TaskModalProps) => {
  const { getExercise } = useReferenceStore();
  const router = useRouter();

  const getTaskDescription = () => {
    return `${task.isStatic ? `ВРЕМЯ ВЫПОЛНЕНИЯ: ${task?.duration}` : `ПОВТОРЕНИЯ: ${task?.reps}`} / ПОДХОДЫ: ${task?.sets} / ОТДЫХ: ${task?.rest} сек`;
  };

  const exercise = useMemo(() => {
    return getExercise(task?.exerciseId);
  }, [task]);

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

      <Button type="gradient" onPress={() => router.navigate("/signin")}>
        <Typography type="key" style={GlobalStyles.textDark}>
          SAVE THE TRAINING PROGRAM
        </Typography>
      </Button>
    </ModalLayout>
  );
};

export default TaskModal;
