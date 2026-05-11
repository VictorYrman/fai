// External Dependencies
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getExerciseCategories = async () => {
    try {
        const exerciseCategoriesCollection = collection(db, "ExerciseCategories");
        const querySnapshot = await getDocs(exerciseCategoriesCollection);

        const exerciseCategories = querySnapshot.docs.map((document) => {
            const data = document.data();

            return {
                id: document.id,
                name: data.name,
                value: data.value
            };
        });

        return exerciseCategories;
    } catch (error) {
        console.error(error);
    }
};

export const getMuscleCategories = async () => {
    try {
        const muscleCategoriesCollection = collection(db, "MuscleCategories");
        const querySnapshot = await getDocs(muscleCategoriesCollection);

        const muscleCategories = querySnapshot.docs.map((document) => {
            const data = document.data();

            return {
                id: document.id,
                name: data.name,
                value: data.value,
                image: data.image
            };
        });

        return muscleCategories;
    } catch (error) {
        console.error(error);
    }
};

export const getDifficultyLevels = async () => {
    try {
        const difficultyLevelsCollection = collection(db, "DifficultyLevels");
        const querySnapshot = await getDocs(difficultyLevelsCollection);

        const difficultyLevels = querySnapshot.docs.map((document) => {
            const data = document.data();

            return {
                id: document.id,
                name: data.name,
                value: data.value
            };
        });

        return difficultyLevels;
    } catch (error) {
        console.error(error);
    }
};

export const getGoals = async () => {
    try {
        const goalsCollection = collection(db, "Goals");
        const querySnapshot = await getDocs(goalsCollection);

        const goals = querySnapshot.docs.map((document) => {
            const data = document.data();

            return {
                id: document.id,
                name: data.name,
                value: data.value,
                prioritySplit: data.prioritySplit
            };
        });

        return goals;
    } catch (error) {
        console.error(error);
    }
};

export const getImpactPoints = async () => {
    try {
        const impactPointsCollection = collection(db, "ImpactPoints");
        const querySnapshot = await getDocs(impactPointsCollection);

        const impactPoints = querySnapshot.docs.map((document) => {
            const data = document.data();

            return {
                id: document.id,
                name: data.name
            };
        });

        return impactPoints;
    } catch (error) {
        console.error(error);
    }
};

export const getJointLoads = async () => {
    try {
        const jointLoadsCollection = collection(db, "JointLoads");
        const querySnapshot = await getDocs(jointLoadsCollection);

        const jointLoads = querySnapshot.docs.map((document) => {
            const data = document.data();

            return {
                id: document.id,
                name: data.name,
                value: data.value
            };
        });

        return jointLoads;
    } catch (error) {
        console.error(error);
    }
};

export const getExercises = async () => {
    try {
        const exercisesCollection = collection(db, "Exercises");
        const querySnapshot = await getDocs(exercisesCollection);

        const exercises = querySnapshot.docs.map((document) => {
            const data = document.data();

            return {
                id: document.id,
                name: data.name,
                description: data.description,
                exerciseCategoryId: data.exerciseCategoryId.id,
                muscleCategories: data.muscleCategories.map((item: any) => ({
                    isPrimary: item.isPrimary,
                    muscleCategoryId: item.muscleCategoryId.id
                })) || [],
                difficultyLevelId: data.difficultyLevelId.id,
                goalIds: data.goalIds.map((reference: any) => reference.id) || [],
                impactPointIds: data.impactPointIds.map((reference: any) => reference.id) || [],
                jointLoadId: data.jointLoadId.id,
                isStatic: data.isStatic,
                video: data.video
            };
        });

        return exercises;
    } catch (error) {
        console.error(error);
    }
};