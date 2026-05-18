// Atoms Components
import Typography from "@/components/atoms/Typography";

// Organisms Components
import ScreenLayout from "@/components/organisms/ScreenLayout";
import TaskSlider from "@/components/organisms/TaskSlider";
import ExerciseCategoryCard from "@/components/organisms/ExerciseCategoryCard";
import { Days } from "@/components/organisms/DayProgram";

// External Dependencies
import { View } from "react-native";
import { useEffect, useMemo } from "react";

// Store
import { useProgramStore } from "@/store/useProgramStore";
import { useReferenceStore } from "@/store/useReferenceStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { useAuthStore } from "@/store/useAuthStore";
import { useProfileStore } from "@/store/useProfileStore";

const currentDay =
  Days[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1].value;

export default function Home() {
  const { user } = useAuthStore();
  const { program, getProgram } = useProgramStore();
  const { getProfile } = useProfileStore();
  const { exerciseCategories } = useReferenceStore();

  useEffect(() => {
    if (user) {
      getProfile();
      getProgram();
    }
  }, [user]);

  const currentTasks = useMemo(() => {
    const currentTrainingDay = program?.days.filter(
      (day) => day.day === currentDay,
    )[0];
    if (!currentTrainingDay) return [];

    const warmup = (currentTrainingDay?.warmup || []).map((task: any) => ({
      ...task,
      section: "warmup",
    }));
    const base = (currentTrainingDay?.base || []).map((task: any) => ({
      ...task,
      section: "base",
    }));
    const cooldown = (currentTrainingDay?.cooldown || []).map((task: any) => ({
      ...task,
      section: "cooldown",
    }));

    return [...warmup, ...base, ...cooldown].filter(
      (task: any) => task.status !== "completed",
    );
  }, [program]);

  return (
    <ScreenLayout>
      <Typography type="title" style={GlobalStyles.textCenter}>
        С ВОЗВРАЩЕНИЕМ!
      </Typography>

      <View style={GlobalStyles.contentGap}>
        <Typography type="subtitle">СЕГОДНЯШНИЕ ЗАДАНИЯ</Typography>
        {currentTasks.length !== 0 ? (
          <TaskSlider tasks={currentTasks} day={currentDay} />
        ) : (
          <Typography type="paragraph">На сегодня заданий нет!</Typography>
        )}
      </View>

      <View style={GlobalStyles.contentGap}>
        <Typography type="subtitle">БАЗА УПРАЖНЕНИЙ</Typography>

        <View style={GlobalStyles.contentGap}>
          {exerciseCategories.map((exerciseCategory) => (
            <ExerciseCategoryCard
              key={exerciseCategory?.id}
              exerciseCategory={exerciseCategory}
            />
          ))}
        </View>
      </View>
    </ScreenLayout>
  );
}
