// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const OptionCircleStyles = StyleSheet.create({
    optionCircle: {
        ...GlobalStyles.columnCenter,
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: Colors.light,
        borderRadius: "100%"
    },
    emptyCircleSelected: {
        borderColor: Colors.primary
    },
    circleSelected: {
        width: Spacing.medium,
        height: Spacing.medium,
        backgroundColor: Colors.primary,
        borderRadius: "100%"
    }
});