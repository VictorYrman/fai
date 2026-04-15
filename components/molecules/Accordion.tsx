// Atoms Components
import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography";

// External Dependencies
import { useState } from "react";
import { Pressable, View } from "react-native";

// Constants
import { Colors, IconSize } from "@/constants/theme";

// Styles
import { AccordionStyles } from "@/styles/components/molecules/Accordion.styles";

// Props Type
type AccordionProps = {
    title: string;
    defaultExpanded?: boolean;
    children: React.ReactNode;
    onToggle?: (isExpanded: boolean) => void;
}

const Accordion = ({ title, defaultExpanded = true, children, onToggle }: AccordionProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

    const onToggleHandler = () => {
        setIsExpanded(!isExpanded);
        onToggle?.(!isExpanded);
    }

    return (
        <View style={AccordionStyles.accordion}>
            <Pressable onPress={onToggleHandler} style={AccordionStyles.accordionHeader}>
                <Typography type="subtitle">{title}</Typography>
                <Icon icon={isExpanded ? "arrow-up" : "arrow-down"} width={IconSize.medium} height={IconSize.medium} color={Colors.light} />
            </Pressable>

            {isExpanded && (
                <View style={AccordionStyles.accordionContent}>
                    {children}
                </View>
            )}
        </View>
    );
};

export default Accordion;