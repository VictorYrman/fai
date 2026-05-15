// External Dependencies
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Services
import { getProfile, updateProfile } from "@/services/FirebaseService";

// Store
import * as useAuthStore from "./useAuthStore";

type Profile = {
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
};

type ProfileField = keyof Profile;

type ProfileState = {
  profile: Profile | null;
  setField: (field: ProfileField, value: any) => void;
  getProfile: () => Promise<void>;
  updateProfile: (profile: Profile) => Promise<void>;
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: null,
      setField: (field: ProfileField, value: any) => {
        set((state: any) => ({
          profile: { ...state.profile, [field]: value },
        }));
      },
      getProfile: async () => {
        try {
          const user = useAuthStore.useAuthStore.getState().user;

          if (!user) return;

          const profile = await getProfile(user?.uid);
          set({ profile: profile });
        } catch (error) {
          console.error(error);
        }
      },
      updateProfile: async (profile: Profile) => {
        try {
          const user = useAuthStore.useAuthStore.getState().user;

          if (!user) return;

          await updateProfile(user?.uid, profile);

          set({ profile: profile });
        } catch (error) {
          console.error(error);
        }
      },
    }),
    {
      name: "profile",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
