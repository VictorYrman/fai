// External Dependencies
import { Text, TextProps } from "react-native";

// Styles
import { TypographyStyles } from "@/styles/components/atoms/Typography.styles";

// Typography Type
type TypographyType = "title" | "subtitle" | "key" | "paragraph" | "small";

// Props Type
type TypographyProps = TextProps & {
    type: TypographyType;
    children: React.ReactNode;
}

const Typography = ({ type, style, children, ...props }: TypographyProps) => {
    return (
        <Text style={[TypographyStyles.text, TypographyStyles[type], style]} {...props}>
            {children}
        </Text>
    );
};

export default Typography;