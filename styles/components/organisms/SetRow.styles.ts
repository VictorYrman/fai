// External Dependencies
import { StyleSheet } from "react-native";

// Styles
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const SetRowStyles = StyleSheet.create({
    setRow: {
        ...GlobalStyles.rowAlignCenterBetween,
        ...GlobalStyles.interactiveElement,
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.medium
    }
});