// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

export const FAIAssistantStyles = StyleSheet.create({
    faiAssistant: {
        position: "absolute",
        right: Spacing.medium,
        bottom: Spacing.medium,
    },
    faiAssistantContent: {
        borderRadius: 100,
        padding: Spacing.medium
    }
});