// Atoms Components
import Typography from "./Typography";

// External Dependencies
import { Pressable, PressableProps, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Constants
import { Colors } from "@/constants/theme";

// Styles
import { SelectStyles } from "@/styles/components/atoms/Select.styles";
import { GlobalStyles } from "@/styles/global/GlobalStyles";

// Props Type
type SelectProps = PressableProps & {
    value: string;
    title: string;
    isSelected: boolean;
    onSelect: (value: string) => void;
};

// Gradient Coordinates
const GradientCoordinates = {
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 }
};

// Gradient Colors
const GradientColors = [Colors.primary, Colors.secondary] as const;

const Select = ({ value, title, isSelected, onSelect }: SelectProps) => {
    const onSelectHandler = () => {
        onSelect(value);
    }

    return (
        <Pressable onPress={onSelectHandler} style={[SelectStyles.select]}>
            {isSelected ? (
                <LinearGradient
                    start={GradientCoordinates.start}
                    end={GradientCoordinates.end}
                    colors={GradientColors}
                    style={[SelectStyles.selectContainer, SelectStyles.selectSelected]}
                >
                    <Typography type="key" style={GlobalStyles.textDark}>{title}</Typography>
                </LinearGradient>
            ): (
                <View style={SelectStyles.selectContainer}>
                    <Typography type="key">{title}</Typography>
                </View>
            )}
        </Pressable>
    );
};

export default Select;