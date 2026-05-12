// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Shadows, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const SelectStyles = StyleSheet.create({
  select: {
    ...GlobalStyles.interactiveElement,
  },
  selectContainer: {
    borderRadius: BorderRadius.small,
    padding: Spacing.small,
  },
  selectSelected: {
    ...Shadows.primary,
  },
});
