// Organisms Components
import CardsPicker from "./CardsPicker";

// Props Type
type LevelPickerProps = {
    value: string;
    onSelect: (value: string) => void;
};

const LevelPicker = ({ value, onSelect }: LevelPickerProps) => {
    const Levels = [
        { value: "beginner", image: {
            male: require("@/assets/images/design/survey/levels/beginner-male.png"),
            female: require("@/assets/images/design/survey/levels/beginner-male.png")
        }, title: "Beginner", description: "I've never studied before." },
        { value: "intermediate", image: {
            male: require("@/assets/images/design/survey/levels/intermediate-male.png"),
            female: require("@/assets/images/design/survey/levels/intermediate-male.png")
        }, title: "Intermediate", description: "I used to do." },
        { value: "advanced", image: {
            male: require("@/assets/images/design/survey/levels/advanced-male.png"),
            female: require("@/assets/images/design/survey/levels/advanced-male.png")
        }, title: "Advanced", description: "I've been doing this for several years now." }
    ];

    return (
        <CardsPicker value={value} cards={Levels} onSelect={onSelect} />
    );
};

export default LevelPicker;