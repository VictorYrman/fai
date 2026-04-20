// External Dependencies
import { Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

// Constants
import { Colors, IconSize } from "@/constants/theme";

// Styles
import { SurveyManagerStyles } from "@/styles/components/molecules/SurveyManager.styles";

// Props Type
type SurveyManagerProps = {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
};

// Gradient Coordinates
const GradientCoordinates = {
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 1 }
};

// Gradient Colors
const GradientColors = [Colors.primary, Colors.secondary] as const;

const SurveyManager = ({ currentPage, totalPages, onPrevious, onNext }: SurveyManagerProps) => {
    const progress = ((currentPage + 1) / totalPages) * 100;

    return (
        <View style={SurveyManagerStyles.surveyManager}>
            <Pressable onPress={onPrevious} disabled={currentPage === 0}>
                <FontAwesome name="chevron-left" size={IconSize.small} color={currentPage === 0 ? Colors.lightTranslucent : Colors.primary} />
            </Pressable>

            <View style={SurveyManagerStyles.progressBar}>
                <LinearGradient
                    start={GradientCoordinates.start}
                    end={GradientCoordinates.end}
                    colors={GradientColors}
                    style={[SurveyManagerStyles.progressBarFilled, { width: `${progress}%` }]}
                ></LinearGradient>
            </View>

            <Pressable onPress={onNext} disabled={currentPage === totalPages - 1}>
                <FontAwesome name="chevron-right" size={IconSize.small} color={currentPage === totalPages - 1 ? Colors.lightTranslucent : Colors.primary} />
            </Pressable>
        </View>
    );
};

export default SurveyManager;