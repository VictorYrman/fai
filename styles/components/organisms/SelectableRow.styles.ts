// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const SelectableRowStyles = StyleSheet.create({
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
  selectableRowImage: {
    width: 50,
    height: 100,
  },
});
