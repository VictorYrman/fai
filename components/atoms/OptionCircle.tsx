// External Dependencies
import { StyleProp, View, ViewStyle } from "react-native";

// Styles
import { OptionCircleStyles } from "@/styles/components/atoms/OptionCircle.styles";

// Props Type
type OptionCircleProps = {
    isSelected: boolean;
    style?: StyleProp<ViewStyle>;
}

const OptionCircle = ({ isSelected, style }: OptionCircleProps) => {
    return (
        <View style={[OptionCircleStyles.optionCircle, isSelected ? OptionCircleStyles.emptyCircleSelected : null, style]}>
            {isSelected && (
                <View style={OptionCircleStyles.circleSelected}></View>
            )}
        </View>
    );
};

export default OptionCircle;