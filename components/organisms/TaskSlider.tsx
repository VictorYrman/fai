// Organisms Components
import TaskCard from "./TaskCard";

// External Dependencies
import { View } from "react-native";
import { useRef } from "react";
import PagerView from "react-native-pager-view";

// Styles
import { TaskSliderStyles } from "@/styles/components/organisms/TaskSlider.styles";

// Props Type
type TaskSliderProps = {
  tasks: any[];
};

const TaskSlider = ({ tasks }: TaskSliderProps) => {
  const pagerRef = useRef<PagerView>(null);

  return (
    <PagerView
      ref={pagerRef}
      style={TaskSliderStyles.taskSlider}
      initialPage={0}
    >
      {tasks.map((task: any) => (
        <View key={task?.exerciseId} style={{ flex: 1 }}>
          <TaskCard task={task} />
        </View>
      ))}
    </PagerView>
  );
};

export default TaskSlider;
