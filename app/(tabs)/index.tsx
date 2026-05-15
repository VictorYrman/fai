// Atoms Components
import Typography from "@/components/atoms/Typography";

// Organisms Components
import ScreenLayout from "@/components/organisms/ScreenLayout";
import TaskSlider from "@/components/organisms/TaskSlider";
import ExerciseCategoryCard from "@/components/organisms/ExerciseCategoryCard";

// External Dependencies
import { View } from "react-native";
import { useMemo } from "react";

// Store
import { useProgramStore } from "@/store/useProgramStore";
import { useReferenceStore } from "@/store/useReferenceStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

const DayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Home() {
  const { program } = useProgramStore();
  const { exerciseCategories } = useReferenceStore();

  const currentTasks = useMemo(() => {
    const currentDay = DayNames[new Date().getDay() - 1];

    const currentTrainingDay = program?.days.filter(
      (day) => day.day === currentDay,
    )[0];

    return [
      ...(currentTrainingDay?.warmup || []),
      ...(currentTrainingDay?.base || []),
      ...(currentTrainingDay?.cooldown || []),
    ];
  }, [program]);

  return (
    <ScreenLayout>
      <Typography type="title" style={GlobalStyles.textCenter}>
        С ВОЗВРАЩЕНИЕМ!
      </Typography>

      <View style={GlobalStyles.contentGap}>
        <Typography type="subtitle">СЕГОДНЯШНИЕ ЗАДАНИЯ</Typography>
        {currentTasks.length !== 0 ? (
          <TaskSlider tasks={currentTasks} />
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
