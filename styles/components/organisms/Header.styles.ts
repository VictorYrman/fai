// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import {  Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const HeaderStyles = StyleSheet.create({
    header: {
        ...GlobalStyles.columnCenter,
        padding: Spacing.medium
    }
});