// Atoms Components
import Typography from "../atoms/Typography";

// External Dependencies
import { View } from "react-native";
import WheelPickerExpo from "react-native-wheel-picker-expo";

// Constants
import { Colors } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

// Props Type
type AgePickerProps = {
    value: number;
    onSelect: (value: number) => void;
};

const AGES = Array.from({ length: 67 }, (_, i) => (i + 14).toString());

const AgePicker = ({ value, onSelect }: AgePickerProps) => {
    return (
        <View style={GlobalStyles.columnCenter}>
            <WheelPickerExpo 
                width={"50%"}
                height={200}
                initialSelectedIndex={AGES.indexOf(value.toString())}
                items={AGES.map(age => ({ label: age, value: age }))}
                onChange={({ item }) => onSelect(Number(item.value))}
                backgroundColor={Colors.background}
                selectedStyle={{
                    borderColor: Colors.light,
                    borderWidth: 2
                }}
                renderItem={(props) => (
                    <Typography type="key">
                        {props.label}
                    </Typography>
                )}
            />
        </View>
    );
};

export default AgePicker;