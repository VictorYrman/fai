// Molecules Components
import ImageOption from "../molecules/ImageOption";

// External Dependencies
import { View } from "react-native";

// Styles
import { GenderPickerStyles } from "@/styles/components/organisms/GenderPicker.styles";

// Props Type
type GenderPickerProps = {
    value: string;
    onSelect: (value: string) => void;
};

const GenderPicker = ({ value, onSelect }: GenderPickerProps) => {
    return (
        <View style={GenderPickerStyles.genderPicker}>
            <ImageOption value="Male" image={require("@/assets/images/design/male.png")} title="Male" isSelected={value === "Male"} onSelect={onSelect} />
            <ImageOption value="Female" image={require("@/assets/images/design/female.png")} title="Female" isSelected={value === "Female"} onSelect={onSelect} />
        </View>
    );
};

export default GenderPicker;