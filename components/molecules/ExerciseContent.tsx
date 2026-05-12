// Atoms Components
import Typography from "../atoms/Typography";

// External Dependencies
import { Image } from "expo-image";
import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

// Store
import { useSurveyStore } from "@/store/useSurveyStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { ExerciseContentStyles } from "@/styles/components/molecules/ExerciseContent.styles";

// Props Type
type ExerciseContentProps = {
  name: string | undefined;
  video: { man: string; woman: string } | undefined;
  taskDescription?: string | undefined;
  exerciseDescription: string | undefined;
  muscleCategories: any | undefined;
  modalVisible: boolean;
};

const tempVideo = require("@/assets/videos/temp-task.mp4");

const ExerciseContent = ({
  name,
  video,
  taskDescription,
  exerciseDescription,
  muscleCategories,
  modalVisible,
}: ExerciseContentProps) => {
  const { survey } = useSurveyStore();
  const player = useVideoPlayer(
    (survey.gender === "Female" ? video?.woman : video?.man) || tempVideo,
    (player) => {
      player.loop = true;
      player.muted = true;
    },
  );

  useEffect(() => {
    if (!modalVisible) {
      player.pause();
    } else {
      player.play();
    }
  }, [modalVisible, player]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={GlobalStyles.contentGap}>
        <Typography type="title">{name}</Typography>

        {video && (
          <View style={GlobalStyles.contentGap}>
            <Typography type="subtitle">Техника выполнения</Typography>
            <VideoView
              player={player}
              contentFit="cover"
              style={ExerciseContentStyles.video}
            />
          </View>
        )}

        {taskDescription && (
          <View style={GlobalStyles.contentGap}>
            <Typography type="subtitle">Условие задания</Typography>
            <Typography type="paragraph">{taskDescription}</Typography>
          </View>
        )}

        {exerciseDescription && (
          <View style={GlobalStyles.contentGap}>
            <Typography type="subtitle">Инструкция</Typography>
            <Typography type="paragraph">{exerciseDescription}</Typography>
          </View>
        )}

        {muscleCategories && (
          <View style={GlobalStyles.contentGap}>
            <Typography type="subtitle">Задействованные мышцы</Typography>

            <View style={ExerciseContentStyles.muscleCategories}>
              <View style={ExerciseContentStyles.muscleCategoryImages}>
                {muscleCategories &&
                  muscleCategories.map((muscleCategory: any) => (
                    <Image
                      key={muscleCategory.muscleCategory?.id}
                      source={
                        survey.gender === "Female"
                          ? muscleCategory.muscleCategory?.image?.woman
                          : muscleCategory.muscleCategory?.image?.man
                      }
                      style={ExerciseContentStyles.muscleCategoryImage}
                    />
                  ))}
              </View>

              <View style={ExerciseContentStyles.muscleCategoryNames}>
                {muscleCategories &&
                  muscleCategories.map((muscleCategory: any) => (
                    <Typography
                      key={muscleCategory.muscleCategory?.id}
                      type="key"
                      style={GlobalStyles.textPrimary}
                    >
                      {muscleCategory.muscleCategory?.name}
                    </Typography>
                  ))}
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ExerciseContent;
