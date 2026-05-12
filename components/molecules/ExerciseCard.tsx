// Atoms Components
import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography";

// Organisms Components
import ExerciseModal from "../organisms/ExerciseModal";

// External Dependencies
import { useMemo, useState } from "react";
import { Pressable, View } from "react-native";

// Constants
import { Colors, IconSize } from "@/constants/theme";

// Styles
import { ExerciseCardStyles } from "@/styles/components/molecules/ExerciseCard.styles";

// Exercise Type
export type ExerciseType = "warmup" | "strength" | "cardio" | "stretch";

// Props Type
export type ExerciseCardProps = {
  exercise: any;
};

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const getExerciseInfo = (exercise: any) => {
    return {
      type: exercise?.exerciseCategory?.value as ExerciseType,
      title: exercise?.name || "",
      description: exercise?.description.substring(0, 50) + "...",
    };
  };

  const exerciseInfo = useMemo(() => {
    return getExerciseInfo(exercise);
  }, [exercise]);

  return (
    <>
      <Pressable
        onPress={() => setIsModalVisible(true)}
        style={ExerciseCardStyles.exerciseCard}
      >
        <View style={ExerciseCardStyles.exerciseCardIconWrapper}>
          <Icon
            icon={exerciseInfo.type}
            width={IconSize.medium}
            height={IconSize.medium}
            color={Colors.light}
          />
        </View>

        <View style={ExerciseCardStyles.exerciseCardContent}>
          <Typography type="key">{exerciseInfo.title}</Typography>

          <Typography type="paragraph">{exerciseInfo.description}</Typography>
        </View>
      </Pressable>

      {isModalVisible && (
        <ExerciseModal
          exercise={exercise}
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
};

export default ExerciseCard;
