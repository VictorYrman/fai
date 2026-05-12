// Organisms Components
import SelectionPicker from "./SelectionPicker";

// External Dependencies
import { useMemo, useState } from "react";
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

const FT_TO_CM = 30.48;

const HeightPicker = ({ value, onSelect }: HeightPickerProps) => {
  const [heightUnit, setHeightUnit] = useState<string>(HeightUnits[0].value);

  const onSelectHandler = (height: number) => {
    let heightInCm: number = height;

    if (heightUnit === "cm") {
      heightInCm = height;
    } else {
      heightInCm = height * FT_TO_CM;
    }

    onSelect(heightInCm);
  };

  const displayValue = useMemo(() => {
    return heightUnit === "cm" ? value : value / FT_TO_CM;
  }, [heightUnit, value]);

  const minValue = useMemo(() => {
    return heightUnit === "cm" ? 100 : 3;
  }, [heightUnit]);
  const maxValue = useMemo(() => {
    return heightUnit === "cm" ? 240 : 8;
  }, [heightUnit]);

  return (
    <View style={HeightPickerStyles.heightPicker}>
      <SelectionPicker
        value={heightUnit}
        selections={HeightUnits}
        onSelect={(heightUnit: string) => setHeightUnit(heightUnit)}
      />

      <RulerPicker
        key={heightUnit}
        min={minValue}
        max={maxValue}
        step={0.1}
        fractionDigits={1}
        initialValue={displayValue}
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
