// Atoms Components
import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography";

// External Dependencies
import { View, Pressable, PressableProps } from "react-native";

// Constants
import { Colors, IconSize } from "@/constants/theme";

// Styles
import { TaskCardStyles } from "@/styles/components/molecules/TaskCard.styles";

// Task Type
type TaskType = "warmup" | "strength" | "cardio" | "stretch";

// Proprs Type
type TaskCardProps = PressableProps & {
    type: TaskType;
    title: string;
    description: string;
    onPress: () => void;
};

const TaskCard = ({ type, title, description, onPress }: TaskCardProps) => {
    return (
        <Pressable onPress={onPress} style={TaskCardStyles.taskCard}>
            <View style={TaskCardStyles.taskCardIconWrapper}>
                <Icon icon={type} width={IconSize.medium} height={IconSize.medium} color={Colors.light} />
            </View>

            <View style={TaskCardStyles.taskCardContent}>
                <Typography type="key">
                    {title}
                </Typography>

                <Typography type="paragraph">
                    {description}
                </Typography>
            </View>
        </Pressable>
    );
};

export default TaskCard;