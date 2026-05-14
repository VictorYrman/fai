// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const ExerciseCardStyles = StyleSheet.create({
  exerciseCard: {
    ...GlobalStyles.rowAlignCenter,
    ...GlobalStyles.interactiveElement,
    ...GlobalStyles.contentGap,
    width: "100%",
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
  },
  exerciseCardIconWrapper: {
    ...GlobalStyles.interactiveElement,
    padding: Spacing.small,
  },
  exerciseCardContent: {
    ...GlobalStyles.elementsGap,
    flex: 1,
  },
});
