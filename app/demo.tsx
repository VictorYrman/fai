// Atoms Components
import Button from "@/components/atoms/Button";
import GradientBackground from "@/components/atoms/GradientBackground";
import Typography from "@/components/atoms/Typography";

// Molecules Components
import Accordion from "@/components/molecules/Accordion";

// Organisms Components
import TaskCard from "@/components/organisms/TaskCard";
import SelectionPicker from "@/components/organisms/SelectionPicker";

// External Dependencies
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

// Store
import { useProgramStore } from "@/store/useProgramStore";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

const Days = [
  { value: "Monday", title: "ПНД" },
  { value: "Tuesday", title: "ВТР" },
  { value: "Wednesday", title: "СРД" },
  { value: "Thursday", title: "ЧТВ" },
  { value: "Friday", title: "ПТН" },
  { value: "Saturday", title: "СБТ" },
  { value: "Sunday", title: "ВСК" },
];

export default function Demo() {
  const { program } = useProgramStore();

  const [day, setDay] = useState<string>(Days[0].value);
  const [currentProgram, setCurrentProgram] = useState(
    program ? program.days[0] : undefined,
  );

  useEffect(() => {
    const newCurrentProgram = program?.days.filter(
      (programDay) => programDay.day.toLowerCase() === day.toLowerCase(),
    );
    setCurrentProgram(newCurrentProgram ? newCurrentProgram[0] : undefined);
  }, [program, day]);

  const router = useRouter();
  const HeaderHeight = useHeaderHeight();

  const PaddingTop = HeaderHeight + Spacing.long;

  return (
    <GradientBackground
      style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Typography type="title" style={GlobalStyles.textCenter}>
          ВАША ПРОГРАММА НА НЕДЕЛЮ
        </Typography>

        <SelectionPicker
          value={day}
          selections={Days}
          onSelect={(day) => setDay(day)}
        />

        {currentProgram === undefined ? (
          <Typography type="paragraph" style={GlobalStyles.textCenter}>
            На этот день не запланировано никаких тренировок.
          </Typography>
        ) : (
          <View style={GlobalStyles.contentGap}>
            <Accordion title="Разминка">
              {currentProgram &&
                currentProgram.warmup &&
                currentProgram?.warmup.map((task) => (
                  <TaskCard key={task.exerciseId} task={task} />
                ))}
            </Accordion>

            <Accordion title="Основа">
              {currentProgram &&
                currentProgram.base &&
                currentProgram?.base.map((task) => (
                  <TaskCard key={task.exerciseId} task={task} />
                ))}
            </Accordion>

            <Accordion title="Заминка">
              {currentProgram &&
                currentProgram.cooldown &&
                currentProgram?.cooldown.map((task) => (
                  <TaskCard key={task.exerciseId} task={task} />
                ))}
            </Accordion>
          </View>
        )}
      </ScrollView>

      <Button type="gradient" onPress={() => router.navigate("/signin")}>
        <Typography type="key" style={GlobalStyles.textDark}>
          СОХРАНИТЬ ПРОГРАММУ
        </Typography>
      </Button>
    </GradientBackground>
  );
}
