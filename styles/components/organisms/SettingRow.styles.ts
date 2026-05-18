// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const SettingRowStyles = StyleSheet.create({
  settingRow: {
    ...GlobalStyles.interactiveElement,
    ...GlobalStyles.rowAlignCenter,
    ...GlobalStyles.elementsGap,
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
  },
});
