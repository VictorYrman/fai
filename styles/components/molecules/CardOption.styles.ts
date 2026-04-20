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
        position: "relative",
        width: "100%",
        gap: Spacing.medium,
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
        flex: 1,
        gap: Spacing.small
    },
    statusContainer: {
        ...GlobalStyles.absoluteToRight,
        ...GlobalStyles.rowCenter,
        gap: Spacing.small
        
    }
});