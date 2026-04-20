// External Dependencies
import { StyleSheet } from "react-native";

// Styles
import { GlobalStyles } from "../global/GlobalStyles";

export const WelcomeStyles = StyleSheet.create({
    welcome: {
        ...GlobalStyles.container,
        ...GlobalStyles.sectionGap,
        flex: 1
    },
    welcomeContent: {
        ...GlobalStyles.columnCenter,
        ...GlobalStyles.contentGap
    }
});