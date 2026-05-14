// Atoms Components
import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography";

// Organisms Components
import TaskModal from "./TaskModal";

// External Dependencies
import { useMemo, useState } from "react";
import { View, Pressable, PressableProps } from "react-native";

// Constants
import { Colors, IconSize } from "@/constants/theme";

// Store
import { useReferenceStore } from "@/store/useReferenceStore";

// Styles
import { TaskCardStyles } from "@/styles/components/organisms/TaskCard.styles";

// Task Type
export type TaskType = "warmup" | "strength" | "cardio" | "stretch";

// Proprs Type
type TaskCardProps = PressableProps & {
  task: any;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const { getExercise } = useReferenceStore();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const getTaskInfo = (task: any) => {
    const exercise = getExercise(task?.exerciseId);

    return {
      type: exercise?.exerciseCategory?.value as TaskType,
      title: exercise?.name || "",
      description: `${exercise?.isStatic ? `ВРЕМЯ ВЫПОЛНЕНИЯ: ${task?.duration}` : `ПОВТОРЕНИЯ: ${task?.reps}`} / ПОДХОДЫ: ${task?.sets} / ОТДЫХ: ${task?.rest} сек`,
    };
  };

  const taskInfo = useMemo(() => {
    return getTaskInfo(task);
  }, [task]);

  return (
    <>
      <Pressable
        onPress={() => setIsModalVisible(true)}
        style={TaskCardStyles.taskCard}
      >
        <View style={TaskCardStyles.taskCardIconWrapper}>
          <Icon
            icon={taskInfo.type}
            width={IconSize.medium}
            height={IconSize.medium}
            color={Colors.light}
          />
        </View>

        <View style={TaskCardStyles.taskCardContent}>
          <Typography type="key">{taskInfo.title}</Typography>

          <Typography type="paragraph">{taskInfo.description}</Typography>
        </View>
      </Pressable>

      {isModalVisible && (
        <TaskModal
          task={task}
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
};

export default TaskCard;
