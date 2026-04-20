// Atoms Components
import Typography from "../atoms/Typography";

// External Dependencies
import { Pressable } from "react-native";
import { Image } from "expo-image";

// Styles
import { ExerciseCategoryCardStyles } from "@/styles/components/molecules/ExerciseCategoryCard.styles";

// Props Type
type ExerciseCategoryCardProps = {
    image: string;
    title: string;
    onPress: () => void;
}

const ExerciseCategoryCard = ({ image, title, onPress }: ExerciseCategoryCardProps) => {
    return (
        <Pressable style={ExerciseCategoryCardStyles.exerciseCategoryCard} onPress={onPress}>
            <Image source={image} style={ExerciseCategoryCardStyles.image} />
            <Typography type="key" style={ExerciseCategoryCardStyles.title}>
                {title}
            </Typography>
        </Pressable>
    );
};

export default ExerciseCategoryCard;