// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const SurveyManagerStyles = StyleSheet.create({
    surveyManager: {
        ...GlobalStyles.rowAlignCenterBetween,
        gap: Spacing.medium
    },
    progressBar: {
        flex: 1,
        height: Spacing.medium,
        backgroundColor: Colors.lightTranslucent,
        borderRadius: BorderRadius.small
    },
    progressBarFilled: {
        height: "100%",
        borderRadius: BorderRadius.small
    }
});