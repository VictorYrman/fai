// Molecules Components
import BMIIndicator from "../molecules/BMIIndicator";
import SelectionPicker from "../molecules/SelectionPicker";

// External Dependencies
import { useState } from "react";
import { View } from "react-native";
import { RulerPicker } from "react-native-ruler-picker";

// Constants
import { Colors } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { WeightPickerStyles } from "@/styles/components/organisms/WeightPicker.styles";
import { calculateBMI } from "@/services/HealthService";
import { useSurveyStore } from "@/store/useSurveyStore";

// Props Type
type WeightPickerProps = {
  value: number;
  onSelect: (value: number) => void;
};

const WeightUnits = [
  { value: "kg", title: "kg" },
  { value: "lb", title: "lb" },
];

const WeightPicker = ({ value, onSelect }: WeightPickerProps) => {
  const { survey } = useSurveyStore();
  const [weightUnit, setWeightUnit] = useState<string>(WeightUnits[0].value);

  const BMI = calculateBMI(survey.weight, survey.height);

  const onSelectHandler = (weight: number) => {
    let weightInKg = weight;

    if (weightUnit === "lb") {
      weightInKg = weight * 0.4536;
    }

    onSelect(weightInKg);
  };

  return (
    <View style={WeightPickerStyles.weightPicker}>
      <SelectionPicker
        value={weightUnit}
        selections={WeightUnits}
        onSelect={(weightUnit: string) => setWeightUnit(weightUnit)}
      />

      <BMIIndicator bmi={BMI} />

      <RulerPicker
        min={weightUnit === "kg" ? 20 : 45}
        max={weightUnit === "kg" ? 140 : 300}
        step={0.1}
        fractionDigits={1}
        initialValue={value}
        onValueChangeEnd={(weight: string) => onSelectHandler(Number(weight))}
        unit={weightUnit}
        indicatorColor={Colors.light}
        valueTextStyle={GlobalStyles.textLight}
        unitTextStyle={GlobalStyles.textLight}
      />
    </View>
  );
};

export default WeightPicker;
