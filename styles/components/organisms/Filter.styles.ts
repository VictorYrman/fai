// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const FilterStyles = StyleSheet.create({
  filter: {
    ...GlobalStyles.interactiveElement,
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
  },
});
