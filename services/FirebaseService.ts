// External Dependencies
import { collection, getDocs } from "@react-native-firebase/firestore";

// Config
import { db } from "@/config/firebase";

export const getExerciseCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "ExerciseCategories"));

    const exerciseCategories = querySnapshot.docs.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        name: data.name,
        value: data.value,
        image: data.image,
      };
    });

    return exerciseCategories;
  } catch (error) {
    console.error(error);
  }
};

export const getMuscleCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "MuscleCategories"));

    const muscleCategories = querySnapshot.docs.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        name: data.name,
        value: data.value,
        image: data.image,
      };
    });

    return muscleCategories;
  } catch (error) {
    console.error(error);
  }
};

export const getDifficultyLevels = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "DifficultyLevels"));

    const difficultyLevels = querySnapshot.docs.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        name: data.name,
        value: data.value,
      };
    });

    return difficultyLevels;
  } catch (error) {
    console.error(error);
  }
};

export const getGoals = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Goals"));

    const goals = querySnapshot.docs.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        name: data.name,
        value: data.value,
        prioritySplit: data.prioritySplit,
      };
    });

    return goals;
  } catch (error) {
    console.error(error);
  }
};

export const getImpactPoints = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "ImpactPoints"));

    const impactPoints = querySnapshot.docs.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        name: data.name,
      };
    });

    return impactPoints;
  } catch (error) {
    console.error(error);
  }
};

export const getJointLoads = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "JointLoads"));

    const jointLoads = querySnapshot.docs.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        name: data.name,
        value: data.value,
      };
    });

    return jointLoads;
  } catch (error) {
    console.error(error);
  }
};

export const getExercises = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Exercises"));

    const exercises = querySnapshot.docs.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        name: data.name,
        description: data.description,
        exerciseCategoryId: data.exerciseCategoryId.id,
        muscleCategories:
          data.muscleCategories.map((item: any) => ({
            isPrimary: item.isPrimary,
            muscleCategoryId: item.muscleCategoryId.id,
          })) || [],
        difficultyLevelId: data.difficultyLevelId.id,
        goalIds: data.goalIds.map((reference: any) => reference.id) || [],
        impactPointIds:
          data.impactPointIds.map((reference: any) => reference.id) || [],
        jointLoadId: data.jointLoadId.id,
        isStatic: data.isStatic,
        video: data.video,
      };
    });

    return exercises;
  } catch (error) {
    console.error(error);
  }
};
