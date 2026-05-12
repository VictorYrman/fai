// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const ExerciseContentStyles = StyleSheet.create({
  video: {
    width: "100%",
    height: 200,
    borderRadius: BorderRadius.small,
  },
  muscleCategoryImage: {
    width: 50,
    height: 100,
  },
  muscleCategories: {
    ...GlobalStyles.rowAlignCenter,
    ...GlobalStyles.contentGap,
  },
  muscleCategoryImages: {
    ...GlobalStyles.rowAlignCenter,
    ...GlobalStyles.elementsGap,
  },
  muscleCategoryNames: {
    ...GlobalStyles.elementsGap,
  },
});
