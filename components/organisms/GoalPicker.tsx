// Organisms Components
import CardsPicker, { Card } from "./CardsPicker";

// Store
import { useProfileStore } from "@/store/useProfileStore";

// Services
import { calculateBMI } from "@/services/HealthService";

// Props Type
type GoalPickerProps = {
  value: string;
  onSelect: (value: string) => void;
};

const GoalPicker = ({ value, onSelect }: GoalPickerProps) => {
  const { profile } = useProfileStore();

  const BMI = calculateBMI(profile.weight, profile.height);

  const Goals: Card[] = [
    {
      value: "weight-loss",
      image: {
        male: require("@/assets/images/design/survey/goals/weight-loss-male.png"),
        female: require("@/assets/images/design/survey/goals/weight-loss-female.png"),
      },
      title: "Похудение",
      description: "Худейте с помощью индивидуальных программ.",
      advice:
        BMI < 18.5
          ? { type: "warning", title: "Не рекомендовано" }
          : BMI >= 25
            ? { type: "recommendation", title: "Рекомендовано" }
            : undefined,
    },
    {
      value: "muscle-building",
      image: {
        male: require("@/assets/images/design/survey/goals/muscle-building-male.png"),
        female: require("@/assets/images/design/survey/goals/muscle-building-female.png"),
      },
      title: "Набор мышечной массы",
      description: "Создайте сильное и подтянутое тело!",
      advice: undefined,
    },
    {
      value: "keeping-fit",
      image: {
        male: require("@/assets/images/design/survey/goals/keeping-fit-male.png"),
        female: require("@/assets/images/design/survey/goals/keeping-fit-female.png"),
      },
      title: "Тонус и здоровье",
      description: "Поддерживайте идеальный баланс!",
      advice:
        BMI >= 18.5 && BMI < 25
          ? { type: "recommendation", title: "Рекомендую" }
          : undefined,
    },
  ];

  return <CardsPicker value={value} cards={Goals} onSelect={onSelect} />;
};

export default GoalPicker;
