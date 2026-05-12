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
  isLoaded: boolean;
  setProgram: (program: ProgramType) => void;
  setIsLoaded: (state: boolean) => void;
};

export const useProgramStore = create<ProgramState>()(
  persist(
    (set): ProgramState => ({
      program: null,
      isLoaded: false,
      setProgram: (program: ProgramType) => {
        set({ program: program });
      },
      setIsLoaded: (state) => set({ isLoaded: state }),
    }),
    {
      name: "program",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: (state) => {
        return () => state.setIsLoaded(true);
      },
    },
  ),
);
