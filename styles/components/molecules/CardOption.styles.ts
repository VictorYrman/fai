// External Dependencies
import { GlobalStyles } from "@/styles/global/GlobalStyles";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { StyleSheet } from "react-native";

export const CardOptionStyles = StyleSheet.create({
    cardOption: {
        ...GlobalStyles.interactiveCard,
        ...GlobalStyles.rowAlignCenter,
        ...GlobalStyles.contentGap,
        position: "relative",
        width: "100%",
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.medium
    },
    cardOptionSelected: {
        ...GlobalStyles.interactiveCardSelected
    },
    cardOptionImage: {
        width: 50,
        height: 80
    },
    cardOptionContent: {
        ...GlobalStyles.elementsGap,
        flex: 1
    },
    statusContainer: {
        ...GlobalStyles.absoluteToRight,
        ...GlobalStyles.rowCenter,
        ...GlobalStyles.elementsGap
    }
});