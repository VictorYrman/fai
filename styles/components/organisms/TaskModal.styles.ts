// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { BorderRadius, Colors } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const TaskModalStyles = StyleSheet.create({
    taskModal: {
        ...GlobalStyles.screen,
        backgroundColor: Colors.background
    },
    taskModalContent: {
        ...GlobalStyles.sectionGap,
        flex: 1
    },
    taskModalVideo: {
        width: "100%",
        height: 200,
        borderRadius: BorderRadius.small
    },
    taskModalMuscleCategories: {
        ...GlobalStyles.rowAlignCenter,
        ...GlobalStyles.contentGap
    },
    taskModalMuscleCategoryImages: {
        ...GlobalStyles.rowAlignCenter,
        ...GlobalStyles.elementsGap
    },
    taskModalMuscleCategoryImage: {
        width: 50,
        height: 100
    },
    taskModalMuscleCategoryNames: {
        ...GlobalStyles.elementsGap
    },
    taskModalCloseIcon: {
        alignSelf: "flex-end"
    }
});