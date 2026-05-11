// Atoms Components
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";

// External Dependencies
import { useEffect } from "react";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { Modal, Pressable, ScrollView, View } from "react-native";

// Constants
import { IconSize } from "@/constants/theme";

// Store
import { useSurveyStore } from "@/store/useSurveyStore";
import { useReferenceStore } from "@/store/useReferenceStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { TaskModalStyles } from "@/styles/components/organisms/TaskModal.styles";

// Props Type
type TaskModalProps = {
    task: any
    visible: boolean;
    onClose: () => void;
};

const tempVideo = require("@/assets/videos/temp-task.mp4");

const TaskModal = ({ task, visible, onClose }: TaskModalProps) => {
    const { survey } = useSurveyStore();
    const { getExercise } = useReferenceStore();

    const exercise = getExercise(task?.exerciseId);

    const router = useRouter();
    const player = useVideoPlayer((survey.gender === "Female" ? exercise?.video?.woman : exercise?.video?.man) || tempVideo, (player) => {
        player.loop = true;
        player.muted = true;
    });
    
    useEffect(() => {
        if (!visible) {
            player.pause();
        } else {
            player.play();
        }
    }, [visible, player]);

    const getTaskDescription = () => {
        return `${task.isStatic ? `ВРЕМЯ ВЫПОЛНЕНИЯ: ${task?.duration}` : `ПОВТОРЕНИЯ: ${task?.reps}`} / ПОДХОДЫ: ${task?.sets} / ОТДЫХ: ${task?.rest} сек`
    }

    return (
        <Modal animationType="slide" visible={visible} onRequestClose={onClose} style={TaskModalStyles.taskModal} transparent={false}>
            <View style={TaskModalStyles.taskModal}>
                <View style={TaskModalStyles.taskModalContent}>
                    <View>
                        <Pressable onPress={onClose} style={TaskModalStyles.taskModalCloseIcon}>
                            <Icon icon="close" width={IconSize.medium} height={IconSize.medium} />
                        </Pressable>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={GlobalStyles.contentGap}>
                        <Typography type="title">{exercise?.name}</Typography>

                        <View style={GlobalStyles.contentGap}>
                            <Typography type="subtitle">Техника выполнения</Typography>

                            {visible && (
                                <VideoView 
                                    player={player}
                                    style={TaskModalStyles.taskModalVideo}
                                    contentFit="cover"
                                />
                            )}
                        </View>

                        <View style={GlobalStyles.contentGap}>
                            <Typography type="subtitle">Условие задания</Typography>

                            <Typography type="paragraph">{getTaskDescription()}</Typography>
                        </View>

                        <View style={GlobalStyles.contentGap}>
                            <Typography type="subtitle">Инструкция</Typography>

                            <Typography type="paragraph">{exercise?.description}</Typography>
                        </View>

                        <View style={GlobalStyles.contentGap}>
                            <Typography type="subtitle">Задействованные мышцы</Typography>

                            <View style={TaskModalStyles.taskModalMuscleCategories}>
                                <View style={TaskModalStyles.taskModalMuscleCategoryImages}>
                                    {exercise?.muscleCategories && exercise?.muscleCategories.map((muscleCategory) => (
                                        <Image key={muscleCategory.muscleCategory.id} source={survey.gender === "Female" ? muscleCategory.muscleCategory.image?.woman : muscleCategory.muscleCategory?.image?.man} style={TaskModalStyles.taskModalMuscleCategoryImage} />
                                    ))}
                                </View>

                                <View style={TaskModalStyles.taskModalMuscleCategoryNames}>
                                    {exercise?.muscleCategories && exercise?.muscleCategories.map((muscleCategory) => (
                                        <Typography key={muscleCategory.muscleCategory.id} type="key" style={GlobalStyles.textPrimary}>{muscleCategory.muscleCategory?.name}</Typography>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <Button type="gradient" onPress={() => router.navigate("/signin")}>
                    <Typography type="key" style={GlobalStyles.textDark}>
                    SAVE THE TRAINING PROGRAM
                    </Typography>
                </Button>
            </View>
        </Modal>
    );
};

export default TaskModal;