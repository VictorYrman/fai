// Molecules Components
import Input from "../molecules/Input";
import { IconType } from "../atoms/Icon";
import Typography from "../atoms/Typography";

// External Dependencies
import { View } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

// Props Type
type InputFieldProps = {
  label: string;
  value: string;
  icon?: IconType;
  placeholder: string;
  onChange: (value: string) => void;
};

const InputField = ({
  label,
  value,
  icon,
  placeholder,
  onChange,
}: InputFieldProps) => {
  return (
    <View style={GlobalStyles.elementsGap}>
      <Typography type="key">{label}</Typography>
      <Input
        value={value}
        icon={icon}
        placeholder={placeholder}
        onChange={onChange}
      />
    </View>
  );
};

export default InputField;
