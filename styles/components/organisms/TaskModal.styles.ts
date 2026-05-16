// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const TaskModalStyles = StyleSheet.create({
  taskModalRest: {
    ...GlobalStyles.interactiveElement,
    ...GlobalStyles.elementsGap,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium
  },
});
