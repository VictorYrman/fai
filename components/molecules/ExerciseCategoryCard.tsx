// Atoms Components
import Typography from "../atoms/Typography";

// Organisms Components
import ExerciseCategoryModal from "../organisms/ExerciseCategoryModal";

// External Dependencies
import { Image } from "expo-image";
import { useState } from "react";
import { Pressable } from "react-native";

// Styles
import { ExerciseCategoryCardStyles } from "@/styles/components/molecules/ExerciseCategoryCard.styles";

// Props Type
type ExerciseCategoryCardProps = {
  exerciseCategory: any;
};

const ExerciseCategoryCard = ({
  exerciseCategory,
}: ExerciseCategoryCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <Pressable
        style={ExerciseCategoryCardStyles.exerciseCategoryCard}
        onPress={() => setIsModalVisible(true)}
      >
        <Image
          source={exerciseCategory?.image}
          style={ExerciseCategoryCardStyles.image}
        />
        <Typography type="key" style={ExerciseCategoryCardStyles.title}>
          {exerciseCategory?.name}
        </Typography>
      </Pressable>

      {isModalVisible && (
        <ExerciseCategoryModal
          exerciseCategory={exerciseCategory}
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
};

export default ExerciseCategoryCard;
