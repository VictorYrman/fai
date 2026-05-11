// Molecules Components
import { TaskType } from "@/components/molecules/TaskCard";

// External Dependencies
import { create } from "zustand";

// Services
import { getDifficultyLevels, getExerciseCategories, getExercises, getGoals, getImpactPoints, getJointLoads, getMuscleCategories } from "@/services/FirebaseService";

type ExerciseCategoryType = {
    id: string;
    name: string;
    value: TaskType
};

type MuscleCategoryType = {
    id: string;
    name: string;
    value: string;
    image: { man: string, woman: string }
};

type DifficultyLevelType = {
    id: string;
    name: string;
    value: string;
};

type GoalType = {
    id: string;
    name: string;
    value: string;
};

type ImpactPointType = {
    id: string;
    name: string;
};

type JointLoadType = {
    id: string;
    name: string;
    value: string;
};

type ExerciseType = {
    id: string;
    name: string;
    description: string;
    exerciseCategory: ExerciseCategoryType | undefined;
    muscleCategories: { isPrimary: boolean, muscleCategory: MuscleCategoryType }[];
    isStatic: boolean;
    video: { man: string, woman: string };
};

type ReferenceState = {
    exerciseCategories: ExerciseCategoryType[];
    muscleCategories: MuscleCategoryType[];
    difficultyLevels: DifficultyLevelType[];
    goals: GoalType[];
    impactPoints: ImpactPointType[];
    jointLoads: JointLoadType[];
    exercises: ExerciseType[];

    getExerciseCategories: () => Promise<void>;
    getMuscleCategories: () => Promise<void>;
    getDifficultyLevels: () => Promise<void>;
    getGoals: () => Promise<void>;
    getImpactPoints: () => Promise<void>;
    getJointLoads: () => Promise<void>;
    getExercises: () => Promise<void>;

    getExerciseCategory: (id: string) => ExerciseCategoryType | undefined;
    getMuscleCategory: (id: string) => MuscleCategoryType | undefined;
    getDifficultyLevel: (id: string) => DifficultyLevelType | undefined;
    getGoal: (id: string) => GoalType | undefined;
    getImpactPoint: (id: string) => ImpactPointType | undefined;
    getJointLoad: (id: string) => JointLoadType | undefined;
    getExercise: (id: string) => ExerciseType | undefined;
};

export const useReferenceStore = create<ReferenceState>((set, get) => ({
    exerciseCategories: [],
    muscleCategories: [],
    difficultyLevels: [],
    goals: [],
    impactPoints: [],
    jointLoads: [],
    exercises: [],
    getExerciseCategories: async () => {
        const currentExerciseCategories = get().exerciseCategories;

        if (currentExerciseCategories && currentExerciseCategories.length > 0) return;

        try {
            const exerciseCategories = await getExerciseCategories();

            set({ exerciseCategories: exerciseCategories });
        } catch (error) {
            console.error(error);
        }
    },
    getMuscleCategories: async () => {
        const currentMuscleCategories = get().muscleCategories;

        if (currentMuscleCategories && currentMuscleCategories.length > 0) return;

        try {
            const muscleCategories = await getMuscleCategories();

            set({ muscleCategories: muscleCategories });
        } catch (error) {
            console.error(error);
        }
    },
    getDifficultyLevels: async () => {
        const currentDifficultyLevels = get().difficultyLevels;

        if (currentDifficultyLevels && currentDifficultyLevels.length > 0) return;

        try {
            const difficultyLevels = await getDifficultyLevels();

            set({ difficultyLevels: difficultyLevels });
        } catch (error) {
            console.error(error);
        }
     },
    getGoals: async () => {
        const currentGoals = get().goals;

        if (currentGoals && currentGoals.length > 0) return;

        try {
            const goals = await getGoals();

            set({ goals: goals });
        } catch (error) {
            console.error(error);
        }
    },
    getImpactPoints: async () => {
        const currentImpactPoints = get().impactPoints;

        if (currentImpactPoints && currentImpactPoints.length > 0) return;

        try {
            const impactPoints = await getImpactPoints();

            set({ impactPoints: impactPoints });
        } catch (error) {
            console.error(error);
        }
    },
    getJointLoads: async () => {
        const currentJointLoads = get().jointLoads;

        if (currentJointLoads && currentJointLoads.length > 0) return;

        try {
            const jointLoads = await getJointLoads();

            set({ jointLoads: jointLoads });
        } catch (error) {
            console.error(error);
        }
    },
    getExercises: async () => {
        const currentExercises = get().exercises;

        if (currentExercises && currentExercises.length > 0) return;

        try {
            await Promise.all([
                get().getExerciseCategories(),
                get().getMuscleCategories(),
                get().getDifficultyLevels(),
                get().getGoals(),
                get().getImpactPoints(),
                get().getJointLoads()
            ]);

            const rawExercises = await getExercises();

            const exercises = rawExercises?.map((exercise) => {
                return {
                    id: exercise.id,
                    name: exercise.name,
                    description: exercise.description,
                    exerciseCategory: get().getExerciseCategory(exercise.exerciseCategoryId),
                    muscleCategories: exercise.muscleCategories.map((muscleCategory: any) => ({
                        isPrimary: muscleCategory.isPrimary,
                        muscleCategory: get().getMuscleCategory(muscleCategory.muscleCategoryId)
                    })),
                    difficultyLevel: get().getDifficultyLevel(exercise.difficultyLevelId),
                    goals: exercise.goalIds.map((goalId: string) => get().getGoal(goalId)),
                    impactPoints: exercise.impactPointIds.map((impactPointId: string) => get().getImpactPoint(impactPointId)),
                    jointLoad: get().getJointLoad(exercise.jointLoadId),
                    isStatic: exercise.isStatic,
                    video: exercise.video
                }
            });

            set({ exercises: exercises });
        } catch (error) {
            console.error(error);
        }
    },
    
    getExerciseCategory: (id: string) => {
        return get().exerciseCategories.find((exerciseCategory) => exerciseCategory.id === id);
    },
    getMuscleCategory: (id: string) => {
        return get().muscleCategories.find((muscleCategory) => muscleCategory.id === id);
    },
    getDifficultyLevel: (id: string) => {
        return get().difficultyLevels.find((difficultyLevel) => difficultyLevel.id === id);
    },
    getGoal: (id: string) => {
        return get().goals.find((goal) => goal.id === id);
    },
    getImpactPoint: (id: string) => {
        return get().impactPoints.find((impactPoint) => impactPoint.id === id);
    },
    getJointLoad: (id: string) => {
        return get().jointLoads.find((jointLoad) => jointLoad.id === id);
    },
    getExercise: (id: string) => {
        return get().exercises.find((exercise) => exercise.id === id);
    }
}));