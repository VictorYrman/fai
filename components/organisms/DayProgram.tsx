// Atoms Components
import Typography from "../atoms/Typography";

// Molecules Components
import Accordion from "../molecules/Accordion";

// Organisms Components
import TaskCard from "./TaskCard";
import SelectionPicker from "./SelectionPicker";

// External Dependencies
import { View } from "react-native";

// Store
import { SectionType } from "@/store/useProgramStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

// Props Type
type DayProgramProps = {
  day: string;
  onSelect: (value: string) => void;
  currentProgram: any | undefined;
};

export const Days = [
  { value: "Monday", title: "ПНД" },
  { value: "Tuesday", title: "ВТР" },
  { value: "Wednesday", title: "СРД" },
  { value: "Thursday", title: "ЧТВ" },
  { value: "Friday", title: "ПТН" },
  { value: "Saturday", title: "СБТ" },
  { value: "Sunday", title: "ВСК" },
];

const DayProgram = ({ day, onSelect, currentProgram }: DayProgramProps) => {
  const sections = [
    { title: "Разминка", value: "warmup" as SectionType, data: currentProgram?.warmup },
    { title: "Основа", value: "base" as SectionType, data: currentProgram?.base },
    { title: "Заминка", value: "cooldown" as SectionType, data: currentProgram?.cooldown },
  ];

  return (
    <View style={GlobalStyles.contentGap}>
      <SelectionPicker value={day} selections={Days} onSelect={onSelect} />

      {currentProgram === undefined ? (
        <Typography type="paragraph" style={GlobalStyles.textCenter}>
          На этот день не запланировано никаких тренировок.
        </Typography>
      ) : (
        sections.map((section) => (
          <Accordion key={section.title} title={section.title}>
            {section.data?.map((task: any) => (
              <TaskCard key={task.exerciseId} task={task} day={currentProgram.day} section={section.value} />
            ))}
          </Accordion>
        ))
      )}
    </View>
  );
};

export default DayProgram;
