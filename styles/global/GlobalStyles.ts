// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors, Spacing } from "@/constants/theme";

export const GlobalStyles = StyleSheet.create({
    container: {
        margin: Spacing.medium
    },
    columnCenter: {
        alignItems: "center",
        justifyContent: "center"
    },
    rowAlignCenter: {
        flexDirection: "row",
        alignItems: "center"
    },
    rowAlignCenterBetween: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    textDark: {
        color: Colors.dark
    },
    textLight: {
        color: Colors.light
    },
    textCenter: {
        textAlign: "center"
    }
});