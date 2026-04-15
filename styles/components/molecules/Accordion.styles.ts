// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const AccordionStyles = StyleSheet.create({
    accordion: {
        gap: Spacing.medium
    },
    accordionHeader: {
        ...GlobalStyles.rowAlignCenter,
        gap: Spacing.small
    },
    accordionContent: {
        gap: Spacing.medium
    }
});