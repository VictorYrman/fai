// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Colors, Shadows, Spacing } from "@/constants/theme";

export const SelectStyles = StyleSheet.create({
    select: {
        backgroundColor: Colors.lightTranslucent,
        borderRadius: BorderRadius.small
    },
    selectContainer: {
        borderRadius: BorderRadius.small,
        padding: Spacing.small
    },
    selectSelected: {
        ...Shadows.primary
    }
});