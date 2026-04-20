// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors, Spacing, Typography } from "@/constants/theme";
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const InputStyles = StyleSheet.create({
    inputWrapper: {
        position: "relative",
        width: "100%"
    },
    input: {
        ...GlobalStyles.interactiveElement,
        width: "100%",
        color: Colors.light,
        fontSize: Typography.paragraph.fontSize,
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.medium
    },
    inputIcon: {
        ...GlobalStyles.absoluteVerticalCenter,
        right: Spacing.medium
    }
});