// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const ExerciseCategoryCardStyles = StyleSheet.create({
    exerciseCategoryCard: {
        ...GlobalStyles.rowAlignCenterBetween,
        ...GlobalStyles.interactiveElement,
        ...GlobalStyles.contentGap,
        width: "100%",
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.medium
    },
    image: {
        width: 50,
        height: 80
    },
    title: {
        alignSelf: "flex-end"
    }
});