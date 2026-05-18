// External Dependencies
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

// Services
import {
  deleteProgram,
  getProgram,
  updateProgram,
} from "@/services/FirebaseService";

// Store
import { useAuthStore } from "./useAuthStore";

export type StatusType = "pending" | "progress" | "completed" | "failed";

type TaskType = {
  exerciseId: string;
  reps?: number;
  duration?: number;
  sets: number;
  rest: number;
  setsTime: number[];
  status: StatusType;
};

type DayType = {
  day: string;
  warmup: TaskType[];
  base: TaskType[];
  cooldown: TaskType[];
};

export type SectionType = "warmup" | "base" | "cooldown";

type ProgramType = {
  days: DayType[];
};

type ProgramState = {
  program: ProgramType | null;
  isProgramLoaded: boolean;
  setProgram: (program: ProgramType | null) => void;
  setIsProgramLoaded: (isProgramLoaded: boolean) => void;

  getProgram: () => Promise<void>;

  updateTaskStatus: (
    day: string,
    section: SectionType,
    exerciseId: string,
    newStatus: StatusType,
  ) => Promise<void>;
  updateTaskSetsTime: (
    day: string,
    section: SectionType,
    exerciseId: string,
    index: number,
    time: number,
  ) => Promise<void>;

  resetProgram: () => Promise<void>;
};

export const useProgramStore = create<ProgramState>()(
  persist(
    (set, get): ProgramState => ({
      program: null,
      isProgramLoaded: false,
      setProgram: (program: ProgramType | null) => {
        set({ program: program });
      },
      setIsProgramLoaded: (isProgramLoaded) =>
        set({ isProgramLoaded: isProgramLoaded }),
      getProgram: async () => {
        try {
          const user = useAuthStore.getState().user;
          
          if (!user) return;
          
          const program = await getProgram(user.uid);
          set({ program: program });
        } catch (error) {
          console.error(error);
        }
      },
      updateTaskStatus: async (
        day: string,
        section: SectionType,
        exerciseId: string,
        newStatus: StatusType,
      ) => {
        try {
          const program = get().program;
          if (!program) return;

          const days = program.days.map((programDay) => {
            if (programDay.day.toLowerCase() !== day.toLowerCase())
              return programDay;

            const programSection = programDay[section].map((task: any) => {
              if (task.exerciseId === exerciseId) {
                return {
                  ...task,
                  status: newStatus,
                };
              }
              return task;
            });

            return {
              ...programDay,
              [section]: programSection,
            };
          });

          const updatedProgram = { ...program, days: days };

          const user = useAuthStore.getState().user;
          if (!user) return;

          await updateProgram(user.uid, updatedProgram);
          set({ program: updatedProgram, isProgramLoaded: true });
        } catch (error) {
          console.error(error);
        }
      },
      updateTaskSetsTime: async (
        day: string,
        section: SectionType,
        exerciseId: string,
        index: number,
        time: number,
      ) => {
        try {
          const program = get().program;
          if (!program) return;

          const days = program.days.map((programDay) => {
            if (programDay.day.toLowerCase() !== day.toLowerCase())
              return programDay;

            const programSection = programDay[section].map((task: any) => {
              if (task.exerciseId === exerciseId) {
                const updatedSetsTime = Array.from(
                  { length: task.sets },
                  (_, i) => {
                    if (i === index) return time;
                    return task.setsTime?.[i] || 0;
                  },
                );

                return { ...task, setsTime: updatedSetsTime };
              }

              return task;
            });

            return { ...programDay, [section]: programSection };
          });

          const updatedProgram = { ...program, days };

          const user = useAuthStore.getState().user;
          if (!user) return;

          await updateProgram(user.uid, updatedProgram);
          set({ program: updatedProgram });
        } catch (error) {
          console.error(error);
        }
      },

      resetProgram: async () => {
        try {
          const user = useAuthStore.getState().user;

          if (!user) return;

          await deleteProgram(user.uid);
        } catch (error) {
          console.error(error);
        }
      },
    }),
    {
      name: "program",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
