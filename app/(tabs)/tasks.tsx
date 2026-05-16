// Atoms Components
import Typography from "@/components/atoms/Typography";

// Organisms Components
import ScreenLayout from "@/components/organisms/ScreenLayout";
import DayProgram, { Days } from "@/components/organisms/DayProgram";

// External Dependencies
import { useMemo, useState } from "react";

// Store
import { useProgramStore } from "@/store/useProgramStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import Accordion from "@/components/molecules/Accordion";
import TaskCard from "@/components/organisms/TaskCard";

const currentDay =
  Days[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1].value;

export default function Tasks() {
  const { program } = useProgramStore();
  const [day, setDay] = useState<string>(currentDay);

  const currentProgram = useMemo(() => {
    if (!program) return undefined;
    return program.days.find(
      (programDay) => programDay.day.toLowerCase() === day.toLowerCase(),
    );
  }, [program, day]);

  const completedTasks = useMemo(() => {
    if (!currentProgram) return [];

    const warmup = (currentProgram.warmup || []).map((task: any) => ({
      ...task,
      section: "warmup",
    }));
    const base = (currentProgram.base || []).map((task: any) => ({
      ...task,
      section: "base",
    }));
    const cooldown = (currentProgram.cooldown || []).map((task: any) => ({
      ...task,
      section: "cooldown",
    }));

    return [...warmup, ...base, ...cooldown].filter(
      (task) => task.status === "completed",
    );
  }, [currentProgram]);

  // const failedTasks = useMemo(() => {

  // }, [currentProgram]);

  const activeProgram = useMemo(() => {
    if (!currentProgram) return undefined;

    return {
      ...currentProgram,
      warmup: (currentProgram.warmup || []).filter(
        (task: any) => task.status !== "completed",
      ),
      base: (currentProgram.base || []).filter(
        (task: any) => task.status !== "completed",
      ),
      cooldown: (currentProgram.cooldown || []).filter(
        (task: any) => task.status !== "completed",
      ),
    };
  }, [currentProgram]);

  return (
    <ScreenLayout>
      <Typography type="title" style={GlobalStyles.textCenter}>
        ВАШИ ЗАДАНИЯ
      </Typography>

      <DayProgram
        day={day}
        onSelect={(value) => setDay(value)}
        currentProgram={activeProgram}
      />

      {completedTasks && (
        <Accordion title={"Выполненные задания"}>
          {completedTasks.map((task: any) => (
            <TaskCard
              key={task?.exerciseId}
              task={task}
              day={day}
              section={task.section}
            />
          ))}
        </Accordion>
      )}
    </ScreenLayout>
  );
}
