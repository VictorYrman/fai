// External Dependencies
import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "@react-native-firebase/firestore";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

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

// Profiles

export const setProfile = async (
  user: FirebaseAuthTypes.User,
  additionalData: any,
) => {
  try {
    await setDoc(doc(db, "Profiles", user.uid), {
      name: user?.isAnonymous ? "Аноним" : user.displayName,
      email: user?.isAnonymous ? "" : user.email,
      avatar: user?.isAnonymous ? "" : user.photoURL,
      gender: additionalData.gender,
      age: additionalData.age,
      height: additionalData.height,
      weight: additionalData.weight,
      level: additionalData.level,
      goal: additionalData.goal,
      healthProblems: [],
      priorityMuscleCategories: [],
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

export const getProfile = async (userId: string) => {
  try {
    const documentSnapshot = await getDoc(doc(db, "Profiles", userId));

    const profile = documentSnapshot.data();

    return {
      name: profile?.name,
      email: profile?.email,
      avatar: profile?.avatar,
      gender: profile?.gender,
      age: profile?.age,
      height: profile?.height,
      weight: profile?.weight,
      level: profile?.level,
      goal: profile?.goal,
      healthProblems: profile?.healthProblems,
      priorityMuscleCategories: profile?.priorityMuscleCategories,
    };
  } catch (error) {
    console.error(error);
  }
};

export const updateProfile = async (userId: string, profile: any) => {
  try {
    await updateDoc(doc(db, "Profiles", userId), profile);
  } catch (error) {
    console.error(error);
  }
};

export const isProfileDocExists = async (user: FirebaseAuthTypes.User) => {
  try {
    const profileDoc = await getDoc(doc(db, "Profles", user.uid));
    return profileDoc.exists();
  } catch (error) {
    console.error(error);
  }
};

export const setProgram = async (
  user: FirebaseAuthTypes.User,
  program: any,
) => {
  try {
    const days = program.days.map((day: any) => ({
      ...day,
      warmup: day?.warmup.map((task: any) => ({
        ...task,
        setsTime: [],
        status: "pending",
      })),
      base: day?.base.map((task: any) => ({
        ...task,
        setsTime: [],
        status: "pending",
      })),
      cooldown: day?.base.map((task: any) => ({
        ...task,
        setsTime: [],
        status: "pending",
      })),
      feedback: "",
    }));

    await setDoc(doc(db, "Programs", user.uid), {
      days: days,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateProgram = async (userId: string, program: any) => {
  try {
    await updateDoc(doc(db, "Profiles", userId), program);
  } catch (error) {
    console.error(error);
  }
};

// export const getImageUrl = async (userId: string, localUri: string) => {
//   try {
//     const imageRef = ref(storage, `images/${userId}.jpg`);
//     await imageRef.putFile(localUri);

//     const url = await getDownloadURL(imageRef);
//     return url;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
