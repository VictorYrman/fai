// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const TabBarStyles = StyleSheet.create({
    tabBar: {
        ...GlobalStyles.rowAlignCenterBetween,
        ...GlobalStyles.contentGap,
        backgroundColor: Colors.background,
        padding: Spacing.medium
    },
    tabBarItem: {
        ...GlobalStyles.columnCenter,
        flex: 1,
        alignItems: "center"
    }
});