// Molecules Components
import SelectionPicker from "../molecules/SelectionPicker";

// External Dependencies
import { useState } from "react";
import { View } from "react-native";
import { RulerPicker } from "react-native-ruler-picker";

// Constants
import { Colors } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { HeightPickerStyles } from "@/styles/components/organisms/HeightPicker.styles";

// Props Type
type HeightPickerProps = {
  value: number;
  onSelect: (value: number) => void;
};

const HeightUnits = [
  { value: "cm", title: "cm" },
  { value: "ft", title: "ft" },
];

const HeightPicker = ({ value, onSelect }: HeightPickerProps) => {
  const [heightUnit, setHeightUnit] = useState<string>(HeightUnits[0].value);

  const onSelectHandler = (height: number) => {
    let heightInCm: number = height;

    if (heightUnit === "ft") {
      heightInCm = height * 30.479;
    }

    onSelect(heightInCm);
  };

  return (
    <View style={HeightPickerStyles.heightPicker}>
      <SelectionPicker
        value={heightUnit}
        selections={HeightUnits}
        onSelect={(heightUnit: string) => setHeightUnit(heightUnit)}
      />

      <RulerPicker
        min={heightUnit === "cm" ? 100 : 3}
        max={heightUnit === "cm" ? 240 : 8}
        step={0.1}
        fractionDigits={1}
        initialValue={value}
        onValueChangeEnd={(height: string) => onSelectHandler(Number(height))}
        unit={heightUnit}
        indicatorColor={Colors.light}
        valueTextStyle={GlobalStyles.textLight}
        unitTextStyle={GlobalStyles.textLight}
      />
    </View>
  );
};

export default HeightPicker;
