// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const TaskCardStyles = StyleSheet.create({
    taskCard: {
        width: "100%",
        ...GlobalStyles.rowAlignCenter,
        gap: Spacing.medium,
        backgroundColor: Colors.lightTranslucent,
        borderRadius: BorderRadius.small,
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.medium,
    },
    taskCardIconWrapper: {
        backgroundColor: Colors.lightTranslucent,
        borderRadius: BorderRadius.small,
        padding: Spacing.small
    },
    taskCardContent: {
        gap: Spacing.small
    }
});