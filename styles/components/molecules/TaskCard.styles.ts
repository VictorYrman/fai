// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const TaskCardStyles = StyleSheet.create({
    taskCard: {
        ...GlobalStyles.rowAlignCenter,
        ...GlobalStyles.interactiveElement,
        ...GlobalStyles.contentGap,
        width: "100%",
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.medium,
    },
    taskCardIconWrapper: {
        ...GlobalStyles.interactiveElement,
        padding: Spacing.small
    },
    taskCardContent: {
        ...GlobalStyles.elementsGap
    }
});