// External Dependencies
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../global/GlobalStyles";

export const SignInStyles = StyleSheet.create({
    signIn: {
        ...GlobalStyles.container,
        ...GlobalStyles.sectionGap,
        flex: 1
    },
    signInContent: {
        ...GlobalStyles.columnCenter,
        ...GlobalStyles.contentGap
    }
});