// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const OptionCircleStyles = StyleSheet.create({
    optionCircle: {
        ...GlobalStyles.columnCenter,
        width: Spacing.large,
        height: Spacing.large,
        borderWidth: 2,
        borderColor: Colors.light,
        borderRadius: BorderRadius.full
    },
    emptyCircleSelected: {
        borderColor: Colors.primary
    },
    circleSelected: {
        width: Spacing.medium,
        height: Spacing.medium,
        backgroundColor: Colors.primary,
        borderRadius: BorderRadius.full
    }
});