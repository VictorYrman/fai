// External Dependencies
import { StyleSheet } from "react-native";

// Styles
import { GlobalStyles } from "../global/GlobalStyles";

export const DemoStyles = StyleSheet.create({
    demo: {
        ...GlobalStyles.container,
        ...GlobalStyles.sectionGap,
        flex: 1
    }
});