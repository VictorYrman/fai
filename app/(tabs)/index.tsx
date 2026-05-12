// Atoms Components
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// Organisms Components
import ExerciseCategoryCard from "@/components/organisms/ExerciseCategoryCard";

// External Dependencies
import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

// Store
import { useReferenceStore } from "@/store/useReferenceStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export default function Home() {
  const { exerciseCategories } = useReferenceStore();
  const HeaderHeight = useHeaderHeight();

  return (
    <GradientBackground
      style={[GlobalStyles.screen, { paddingTop: HeaderHeight }]}
    >
      <Typography type="title" style={GlobalStyles.textCenter}>
        С ВОЗВРАЩЕНИЕМ!
      </Typography>

      <View>
        <Typography type="subtitle">СЕГОДНЯШНИЕ ЗАДАНИЯ</Typography>
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
    </GradientBackground>
  );
}
