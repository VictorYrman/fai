// Atoms Components
import Typography from "../atoms/Typography";

// External Dependencies
import { View } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { BMIIndicatorStyles } from "@/styles/components/molecules/BMIIndicator.styles";

// Props Type
type BMIIndicatorProps = {
    bmi: number;
};

const MinBMI: number = 15;
const MaxBMI: number = 40;

const BMIIndicator = ({ bmi }: BMIIndicatorProps) => {
    const percentage: number = Math.min(Math.max(((bmi - MinBMI) / (MaxBMI - MinBMI)) * 100, 0), 100);

    return (
        <View style={BMIIndicatorStyles.bmiIndicator}>
            <View style={BMIIndicatorStyles.bmiIndicatorContent}>
                <View style={[BMIIndicatorStyles.bmiIndicatorElement, BMIIndicatorStyles.bmiIndicatorElementInsufficient]}></View>
                <View style={[BMIIndicatorStyles.bmiIndicatorElement, BMIIndicatorStyles.bmiIndicatorElementNormal]}></View>
                <View style={[BMIIndicatorStyles.bmiIndicatorElement, BMIIndicatorStyles.bmiIndicatorElementRedundant]}></View>
                <View style={[BMIIndicatorStyles.bmiIndicatorElement, BMIIndicatorStyles.bmiIndicatorElementFatness]}></View>
                <View style={[BMIIndicatorStyles.bmiIndicatorElement, BMIIndicatorStyles.bmiIndicatorElementExtremeDegree]}></View>

                <View style={[BMIIndicatorStyles.slider, { left: `${percentage}%` }]}></View>
            </View>

            <View style={BMIIndicatorStyles.bmiIndicatorContent}>
                <Typography type="small" style={[GlobalStyles.textCenter, BMIIndicatorStyles.bmiIndicatorElement]}>Insufficient</Typography>
                <Typography type="small" style={[GlobalStyles.textCenter, BMIIndicatorStyles.bmiIndicatorElement]}>Normal</Typography>
                <Typography type="small" style={[GlobalStyles.textCenter, BMIIndicatorStyles.bmiIndicatorElement]}>Redundant</Typography>
                <Typography type="small" style={[GlobalStyles.textCenter, BMIIndicatorStyles.bmiIndicatorElement]}>Fatness</Typography>
                <Typography type="small" style={[GlobalStyles.textCenter, BMIIndicatorStyles.bmiIndicatorElement]}>Extreme degree</Typography>
            </View>
        </View>
    );
};

export default BMIIndicator;