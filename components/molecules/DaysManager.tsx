// Atoms Components
import Select from "../atoms/Select";

// External Dependencies
import { View } from "react-native";

// Styles
import { DaysManagerStyles } from "@/styles/components/molecules/DaysManager.styles";

// Day Type
type Day = {
    value: string;
    title: string;
};

// Props Type
type DaysManagerProps = {
    value: string;
    days: Day[];
    onSelect: (value: string) => void;
};

const DaysManager = ({ value, days, onSelect }: DaysManagerProps) => {
    return (
        <View style={DaysManagerStyles.daysManager}>
            {days.map((day: Day, index: number) => (
                <Select key={index} value={day.value} title={day.title} isSelected={value === day.value} onSelect={onSelect} />
            ))}
        </View>
    );
};

export default DaysManager;