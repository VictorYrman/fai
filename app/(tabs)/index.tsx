// Atoms Components
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// Molecules Components
import ExerciseCategoryCard from "@/components/molecules/ExerciseCategoryCard";

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
        WELCOME BACK!
      </Typography>

      <View>
        <Typography type="subtitle">CURRENT TASKS</Typography>
      </View>

      <View style={GlobalStyles.contentGap}>
        <Typography type="subtitle">EXERCISE DATABASE</Typography>

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
