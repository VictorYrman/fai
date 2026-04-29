// Atoms Components
import Select from "../atoms/Select";

// External Dependencies
import { View } from "react-native";

// Styles
import { SelectionPickerStyles } from "@/styles/components/molecules/SelectionPicker.styles";

// Day Type
type Selection = {
    value: string;
    title: string;
};

// Props Type
type SelectionPickerProps = {
    value: string;
    selections: Selection[];
    onSelect: (value: string) => void;
};

const SelectionPicker = ({ value, selections, onSelect }: SelectionPickerProps) => {
    return (
        <View style={SelectionPickerStyles.daysManager}>
            {selections.map((selection: Selection, index: number) => (
                <Select key={index} value={selection.value} title={selection.title} isSelected={value === selection.value} onSelect={onSelect} />
            ))}
        </View>
    );
};

export default SelectionPicker;