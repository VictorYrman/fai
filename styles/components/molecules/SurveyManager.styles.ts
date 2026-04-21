// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const SurveyManagerStyles = StyleSheet.create({
    surveyManager: {
        ...GlobalStyles.rowAlignCenterBetween,
        ...GlobalStyles.contentGap
    },
    progressBar: {
        ...GlobalStyles.interactiveElement,
        flex: 1,
        height: Spacing.medium
    },
    progressBarFilled: {
        height: "100%",
        borderRadius: BorderRadius.small
    }
});