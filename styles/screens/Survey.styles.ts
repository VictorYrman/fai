// External Dependencies
import { StyleSheet } from "react-native";

// Styles
import { GlobalStyles } from "../global/GlobalStyles";

export const SurveyStyles = StyleSheet.create({
    survey: {
        ...GlobalStyles.container,
        ...GlobalStyles.sectionGap,
        flex: 1
    }
});