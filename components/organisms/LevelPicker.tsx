// Organisms Components
import CardsPicker from "./CardsPicker";

// Props Type
type LevelPickerProps = {
  value: string;
  onSelect: (value: string) => void;
};

const LevelPicker = ({ value, onSelect }: LevelPickerProps) => {
  const Levels = [
    {
      value: "beginner",
      image: {
        male: require("@/assets/images/design/survey/levels/beginner-male.png"),
        female: require("@/assets/images/design/survey/levels/beginner-male.png"),
      },
      title: "Новичок",
      description: "Я никогда не занимался раньше (давно занимался).",
    },
    {
      value: "intermediate",
      image: {
        male: require("@/assets/images/design/survey/levels/intermediate-male.png"),
        female: require("@/assets/images/design/survey/levels/intermediate-male.png"),
      },
      title: "Средний",
      description: "Раньше я занимался спортом.",
    },
    {
      value: "advanced",
      image: {
        male: require("@/assets/images/design/survey/levels/advanced-male.png"),
        female: require("@/assets/images/design/survey/levels/advanced-male.png"),
      },
      title: "Продвинутый",
      description: "Я занимаюсь спортом уже несколько лет.",
    },
  ];

  return <CardsPicker value={value} cards={Levels} onSelect={onSelect} />;
};

export default LevelPicker;
