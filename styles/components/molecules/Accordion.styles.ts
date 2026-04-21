// External Dependencies
import { StyleSheet } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const AccordionStyles = StyleSheet.create({
    accordion: {
        ...GlobalStyles.contentGap
    },
    accordionHeader: {
        ...GlobalStyles.rowAlignCenter,
        ...GlobalStyles.elementsGap
    },
    accordionContent: {
        ...GlobalStyles.contentGap
    }
});