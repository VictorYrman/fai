// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const CheckboxRowStyles = StyleSheet.create({
  selectableRow: {
    ...GlobalStyles.interactiveElement,
    ...GlobalStyles.rowAlignCenter,
    ...GlobalStyles.elementsGap,
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
  },
  selectableRowSelected: {
    backgroundColor: Colors.primary,
  },
  selectableRowCheckbox: {
    width: Spacing.long,
    height: Spacing.long,
    borderWidth: 2,
    borderColor: Colors.light,
    borderRadius: BorderRadius.small,
  },
  selectableRowCheckboxSelected: {
    borderColor: Colors.dark,
    backgroundColor: Colors.dark,
  },
});
