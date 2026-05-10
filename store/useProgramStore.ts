// External Dependencies
import { create } from "zustand";

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
    program: ProgramType | undefined;
    setProgram: (program: ProgramType) => void;
};

export const useProgramStore = create<ProgramState>((set, get) => ({
    program: undefined,
    setProgram: (program: ProgramType) => {
        set({ program: program });
    }
}));