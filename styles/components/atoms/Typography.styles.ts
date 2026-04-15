// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors, Typography } from "@/constants/theme";

export const TypographyStyles = StyleSheet.create({
    text: {
        color: Colors.text,
        fontFamily: "Inter"
    },
    title: {
        fontSize: Typography.title.fontSize,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: Typography.subtitle.fontSize,
        fontWeight: "bold"
    },
    key: {
        fontSize: Typography.key.fontSize,
        fontWeight: "semibold"
    },
    paragraph: {
        fontSize: Typography.paragraph.fontSize,
        fontWeight: "regular",
        lineHeight: Typography.paragraph.lineHeight
    },
    small: {
        fontSize: Typography.small.fontSize,
        fontWeight: "regular",
        lineHeight: Typography.small.lineHeight
    }
});