// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const BMIIndicatorStyles = StyleSheet.create({
    bmiIndicator: {
        ...GlobalStyles.elementsGap
    },
    bmiIndicatorContent: {
        ...GlobalStyles.rowAlignCenter,
        position: "relative",
        width: "100%"
    },
    bmiIndicatorElement: {
        width: "20%"
    },
    bmiIndicatorElementInsufficient: {
        height: Spacing.small,
        backgroundColor: Colors.bmiInsufficient,
        borderTopLeftRadius: BorderRadius.small,
        borderBottomLeftRadius: BorderRadius.small
    },
    bmiIndicatorElementNormal: {
        height: Spacing.small,
        backgroundColor: Colors.bmiNormal
    },
    bmiIndicatorElementRedundant: {
        height: Spacing.small,
        backgroundColor: Colors.bmiRedundant
    },
    bmiIndicatorElementFatness: {
        height: Spacing.small,
        backgroundColor: Colors.bmiFatness
    },
    bmiIndicatorElementExtremeDegree: {
        height: Spacing.small,
        backgroundColor: Colors.bmiExtremeDegree,
        borderTopEndRadius: BorderRadius.small,
        borderEndEndRadius: BorderRadius.small
    },
    slider: {
        position: "absolute",
        width: Spacing.medium,
        height: Spacing.medium,
        backgroundColor: Colors.primary,
        borderRadius: BorderRadius.full,
        transform: [{ translateX: "-50%" }]
    }
});