// Atoms Components
import Typography from "../atoms/Typography";

// External Dependencies
import { Pressable, View } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { CheckboxRowStyles } from "@/styles/components/organisms/CheckboxRow.styles";

// Props Type
type CheckboxRowProps = {
  value: string;
  title: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
};

const CheckboxRow = ({
  value,
  title,
  isSelected,
  onSelect,
}: CheckboxRowProps) => {
  const onSelectHandler = () => {
    onSelect(value);
  };

  return (
    <Pressable
      onPress={onSelectHandler}
      style={[
        CheckboxRowStyles.selectableRow,
        isSelected && CheckboxRowStyles.selectableRowSelected,
      ]}
    >
      <View
        style={[
          CheckboxRowStyles.selectableRowCheckbox,
          isSelected && CheckboxRowStyles.selectableRowCheckboxSelected,
        ]}
      ></View>
      <Typography type="key" style={isSelected && GlobalStyles.textDark}>
        {title}
      </Typography>
    </Pressable>
  );
};

export default CheckboxRow;
