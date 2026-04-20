// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const ImageOptionStyles = StyleSheet.create({
    imageOption: {
        ...GlobalStyles.interactiveCard,
        ...GlobalStyles.columnCenter,
        flex: 1,
        position: "relative",
        gap: Spacing.medium,
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.medium
    },
    imageOptionSelected: {
        ...GlobalStyles.interactiveCardSelected
    },
    imageOptionImage: {
        width: 120,
        height: 180
    },
    statusContainer: {
        ...GlobalStyles.absoluteToRight
    }
});