// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const FAIAssistantModalStyles = StyleSheet.create({
  faiAssistantModalValue: {
    width: "90%",
    ...GlobalStyles.interactiveElement,
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
  },
  faiAssistantModalValueUser: {
    backgroundColor: Colors.primary,
    alignSelf: "flex-end",
  },
});
