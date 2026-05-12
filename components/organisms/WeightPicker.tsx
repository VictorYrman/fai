// Molecules Components
import BMIIndicator from "../molecules/BMIIndicator";

// Organisms Components
import SelectionPicker from "./SelectionPicker";

// External Dependencies
import { useMemo, useState } from "react";
import { View } from "react-native";
import { RulerPicker } from "react-native-ruler-picker";

// Constants
import { Colors } from "@/constants/theme";

// Services
import { calculateBMI } from "@/services/HealthService";

// Store
import { useSurveyStore } from "@/store/useSurveyStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { WeightPickerStyles } from "@/styles/components/organisms/WeightPicker.styles";

// Props Type
type WeightPickerProps = {
  value: number;
  onSelect: (value: number) => void;
};

const WeightUnits = [
  { value: "kg", title: "kg" },
  { value: "lb", title: "lb" },
];

const LB_TO_KG = 0.45359243;

const WeightPicker = ({ value, onSelect }: WeightPickerProps) => {
  const { survey } = useSurveyStore();
  const [weightUnit, setWeightUnit] = useState<string>(WeightUnits[0].value);

  const onSelectHandler = (weight: number) => {
    let weightInKg = weight;

    if (weightUnit === "kg") {
      weightInKg = weight;
    } else {
      weightInKg = weight * LB_TO_KG;
    }

    onSelect(weightInKg);
  };

  const BMI = useMemo(() => {
    return calculateBMI(survey.weight, survey.height);
  }, [survey]);

  const displayValue = useMemo(() => {
    return weightUnit === "kg" ? value : value / LB_TO_KG;
  }, [weightUnit, value]);

  const minValue = useMemo(() => {
    return weightUnit === "kg" ? 20 : 45;
  }, [weightUnit]);
  const maxValue = useMemo(() => {
    return weightUnit === "kg" ? 140 : 300;
  }, [weightUnit]);

  return (
    <View style={WeightPickerStyles.weightPicker}>
      <SelectionPicker
        value={weightUnit}
        selections={WeightUnits}
        onSelect={(weightUnit: string) => setWeightUnit(weightUnit)}
      />

      <BMIIndicator bmi={BMI} />

      <RulerPicker
        min={minValue}
        max={maxValue}
        step={0.1}
        fractionDigits={1}
        initialValue={displayValue}
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
