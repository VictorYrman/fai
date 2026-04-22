// External Dependencies
import { StyleSheet } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const DaysManagerStyles = StyleSheet.create({
    daysManager: {
        ...GlobalStyles.rowAlignCenter,
        ...GlobalStyles.elementsGap,
        flexWrap: "wrap",
        justifyContent: "center"
    }
});