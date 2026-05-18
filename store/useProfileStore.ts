// External Dependencies
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Services
import { getProfile, updateProfile } from "@/services/FirebaseService";

// Store
import { useAuthStore } from "./useAuthStore";

export type ProfileType = {
  name: string;
  email: string;
  avatar: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  level: string;
  goal: string;
  healthProblems: any[];
  priorityMuscleCategories: any[];
  settings: { unitsOfMeasurement: string; isBotEnabled: boolean };
};

type ProfileField = keyof ProfileType;

type ProfileState = {
  profile: ProfileType;
  isProfileLoaded: boolean;
  setField: (field: ProfileField, value: any) => void;
  getProfile: () => Promise<void>;
  updateProfile: (profile: ProfileType) => Promise<void>;
  resetProfile: () => Promise<void>;
};

const DefaultProfile: ProfileType = {
  name: "",
  email: "",
  avatar: "",
  gender: "",
  age: 20,
  height: 150,
  weight: 60,
  goal: "",
  level: "",
  healthProblems: [],
  priorityMuscleCategories: [],
  settings: {
    unitsOfMeasurement: "metric",
    isBotEnabled: false,
  },
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: DefaultProfile,
      isProfileLoaded: false,

      setField: (field: ProfileField, value: any) => {
        set((state) => ({
          profile: { ...state.profile, [field]: value },
        }));
      },
      getProfile: async () => {
        try {
          const user = useAuthStore.getState().user;

          if (!user) return;

          const profile = await getProfile(user.uid);
          if (profile) {
            set({ profile: profile, isProfileLoaded: true });
          }
        } catch (error) {
          console.error(error);
        }
      },
      updateProfile: async (profile: ProfileType) => {
        try {
          const user = useAuthStore.getState().user;

          if (!user) return;

          await updateProfile(user.uid, profile);

          set({ profile: profile });
        } catch (error) {
          console.error(error);
        }
      },
      resetProfile: async () => {
        const user = useAuthStore.getState().user;

        if (!user) return;

        await updateProfile(user.uid, DefaultProfile);
        set({ profile: DefaultProfile });
      },
    }),
    {
      name: "profile",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
