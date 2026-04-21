// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Colors, Shadows, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const ButtonStyles = StyleSheet.create({
    button: {
        width: "100%",
        borderRadius: Spacing.medium
    },
    buttonContainer: {
        ...GlobalStyles.rowCenter,
        ...GlobalStyles.elementsGap,
        borderRadius: BorderRadius.small,
        paddingVertical: Spacing.small,
        paddingHorizontal: Spacing.medium
    },
    gradient: {
        ...Shadows.primary
    },
    google: {
        backgroundColor: Colors.light,
        ...Shadows.light
    },
});