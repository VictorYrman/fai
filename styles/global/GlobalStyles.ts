// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Colors, Shadows, Spacing } from "@/constants/theme";

export const GlobalStyles = StyleSheet.create({
    screen: {
        flex: 1,
        gap: Spacing.long,
        padding: Spacing.medium
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    interactiveElement: {
        backgroundColor: Colors.lightTranslucent,
        borderRadius: BorderRadius.small
    },
    interactiveCard: {
        backgroundColor: Colors.lightTranslucent,
        borderRadius: BorderRadius.small,

        borderWidth: 2,
        borderColor: Colors.light,
        ...Shadows.light
    },
    interactiveCardSelected: {
        borderColor: Colors.primary,
        ...Shadows.primary
    },

    absoluteToRight: {
        position: "absolute",
        top: Spacing.small,
        right: Spacing.medium
    },
    absoluteVerticalCenter: {
        position: "absolute",
        top: "50%",
        transform: [{ translateY: "-50%" }]
    },

    sectionGap: {
        gap: Spacing.long
    },
    contentGap: {
        gap: Spacing.medium
    },
    elementsGap: {
        gap: Spacing.small
    },

    textPrimary: {
        color: Colors.primary
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