// Atoms Components
import Icon, { IconType } from "./Icon";

// External Dependencies
import { TextInput, View } from "react-native";

// Constants
import { Colors } from "@/constants/theme";

// Styles
import { InputStyles } from "@/styles/components/atoms/Input.styles";

// Props Type
type InputProps = {
    value: string;
    icon?: IconType;
    placeholder: string;
    onChange: (value: string) => void;
};

const Input = ({ value, icon, placeholder, onChange }: InputProps) => {
    return (
        <View style={InputStyles.inputWrapper}>
            <TextInput value={value} placeholder={placeholder} placeholderTextColor={Colors.lightTranslucent} onChangeText={onChange} style={InputStyles.input} />
            {icon && <Icon icon={icon} style={InputStyles.inputIcon} />}
        </View>
    );
};

export default Input;