// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const ExerciseCategoryCardStyles = StyleSheet.create({
    exerciseCategoryCard: {
        width: "100%",
        ...GlobalStyles.rowAlignCenterBetween,
        gap: Spacing.medium,
        backgroundColor: Colors.lightTranslucent,
        borderRadius: Spacing.small,
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