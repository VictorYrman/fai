// Atoms Components
import Button from "@/components/atoms/Button";
import GradientBackground from "@/components/atoms/GradientBackground";
import Typography from "@/components/atoms/Typography";

// Molecules Components
import Accordion from "@/components/molecules/Accordion";
import TaskCard, { TaskType } from "@/components/molecules/TaskCard";
import SelectionPicker from "@/components/molecules/SelectionPicker";

// External Dependencies
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

// Store
import { useProgramStore } from "@/store/useProgramStore";
import { useReferenceStore } from "@/store/useReferenceStore";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

const Days = [
  { value: "Monday", title: "Mon" },
  { value: "Tuesday", title: "Tue" },
  { value: "Wednesday", title: "Wed" },
  { value: "Thursday", title: "Thu" },
  { value: "Friday", title: "Fri" },
  { value: "Saturday", title: "Sat" },
  { value: "Sunday", title: "Sun" },
];

export default function Demo() {
  const { program } = useProgramStore();
  const { getExercise } = useReferenceStore();

  const [day, setDay] = useState<string>(Days[0].value);
  const [currentProgram, setCurrentProgram] = useState(program ? program.days[0] : undefined);

  useEffect(() => {
    const newCurrentProgram = program?.days.filter((programDay) => programDay.day.toLowerCase() === day.toLowerCase());
    setCurrentProgram(newCurrentProgram ? newCurrentProgram[0] : undefined);
  }, [program, day]);

  const router = useRouter();
  const HeaderHeight = useHeaderHeight();

  const PaddingTop = HeaderHeight + Spacing.long;

  const getTaskInfo = (task: any) => {
    const exercise = getExercise(task?.exerciseId);

    return {
      type: exercise?.exerciseCategory?.value as TaskType,
      title: exercise?.name || "",
      description: exercise?.isStatic ? `Выполните 1 подход в течение ${task.duration}, ${task.sets} подход(ов).` : `Выполните ${task.reps} повторений, ${task.sets} подход(ов).`
    };
  };

  const getTaskCard = (task: any) => {
    const taskInfo = getTaskInfo(task);
    const uniqueTaskId = task.exerciseId + Date.now().toString();

    return (
      <TaskCard key={uniqueTaskId} type={taskInfo.type} title={taskInfo.title} description={taskInfo.description} onPress={() => console.info(task.exerciseId)}  />
    );
  };

  return (
    <GradientBackground
      style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Typography type="title" style={GlobalStyles.textCenter}>
          HERE’S YOUR PERSONAL PROGRAM FOR THE WEEK
        </Typography>

        <SelectionPicker
          value={day}
          selections={Days}
          onSelect={(day) => setDay(day)}
        />

        {currentProgram === undefined ? (
          <Typography type="paragraph" style={GlobalStyles.textCenter}>There is no training scheduled for this day.</Typography>
        ) : (
          <View style={GlobalStyles.contentGap}>
            <Accordion title="Warm-up">
              {currentProgram && currentProgram.warmup && currentProgram?.warmup.map((task) => getTaskCard(task))}
            </Accordion>

            <Accordion title="Base">
              {currentProgram && currentProgram.base && currentProgram?.base.map((task) => getTaskCard(task))}
            </Accordion>

            <Accordion title="Cool-down">
              {currentProgram && currentProgram.cooldown && currentProgram?.cooldown.map((task) => getTaskCard(task))}
            </Accordion>
          </View>
        )}
      </ScrollView>

      <Button type="gradient" onPress={() => router.navigate("/signin")}>
        <Typography type="key" style={GlobalStyles.textDark}>
          SAVE THE TRAINING PROGRAM
        </Typography>
      </Button>
    </GradientBackground>
  );
}
