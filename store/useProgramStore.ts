// External Dependencies
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

type TaskType = {
  exerciseId: string;
  reps?: number;
  duration?: number;
  sets: number;
  rest: number;
};

type DayType = {
  day: string;
  warmup: TaskType[];
  base: TaskType[];
  cooldown: TaskType[];
};

type ProgramType = {
  days: DayType[];
};

type ProgramState = {
  program: ProgramType | null;
  isProgramLoaded: boolean;
  setProgram: (program: ProgramType) => void;
  setIsProgramLoaded: (isProgramLoaded: boolean) => void;
};

export const useProgramStore = create<ProgramState>()(
  persist(
    (set): ProgramState => ({
      program: null,
      isProgramLoaded: false,
      setProgram: (program: ProgramType) => {
        set({ program: program });
      },
      setIsProgramLoaded: (isProgramLoaded) =>
        set({ isProgramLoaded: isProgramLoaded }),
    }),
    {
      name: "program",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: (state) => {
        return () => state.setIsProgramLoaded(true);
      },
    },
  ),
);
