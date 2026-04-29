// Organisms Components
import CardsPicker, { Card } from "./CardsPicker";

// Store
import { useSurveyStore } from "@/store/useSurveyStore";

// Services
import { calculateBMI } from "@/services/HealthService";

// Props Type
type GoalPickerProps = {
  value: string;
  onSelect: (value: string) => void;
};

const GoalPicker = ({ value, onSelect }: GoalPickerProps) => {
  const { survey } = useSurveyStore();

  const BMI = calculateBMI(survey.weight, survey.height);

  const Goals: Card[] = [
    {
      value: "weight-loss",
      image: {
        male: require("@/assets/images/design/survey/goals/weight-loss-male.png"),
        female: require("@/assets/images/design/survey/goals/weight-loss-female.png"),
      },
      title: "Lose weight",
      description: "Lose weight with personalized programs...",
      advice: BMI < 18.5 ? { type: "warning", title: "Not recommended" } : BMI >= 25 ? { type: "recommendation", title: "Recommended" } : undefined
    },
    {
      value: "muscle-building",
      image: {
        male: require("@/assets/images/design/survey/goals/muscle-building-male.png"),
        female: require("@/assets/images/design/survey/goals/muscle-building-female.png"),
      },
      title: "Muscle building",
      description:
        "Build a strong body! Focus on strength training for growth...",
      advice: undefined
    },
    {
      value: "keeping-fit",
      image: {
        male: require("@/assets/images/design/survey/goals/keeping-fit-male.png"),
        female: require("@/assets/images/design/survey/goals/keeping-fit-female.png"),
      },
      title: "Keep fit",
      description: "Maintain a perfect balance! Balanced workouts for...",
      advice: (BMI >= 18.5 && BMI < 25) ? { type: "recommendation", title: "Great Option!" } : undefined
    },
  ];

  return <CardsPicker value={value} cards={Goals} onSelect={onSelect} />;
};

export default GoalPicker;
