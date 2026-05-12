// External Dependencies
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";
import { FirebaseAuthTypes, signOut } from "@react-native-firebase/auth";

// Config
import { auth } from "@/config/firebase";

type UserType = {
  uid: string | undefined;
  displayName?: string;
  email?: string;
};

type AuthState = {
  user: UserType | null;
  isAnonymous: boolean;
  setUser: (user: FirebaseAuthTypes.User | null) => void;
  signOut: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set): AuthState => ({
      user: null,
      isAnonymous: false,

      setUser: (user: FirebaseAuthTypes.User | null) => {
        if (!user) {
          set({ user: null, isAnonymous: false });
          return;
        } else {
          const cleanUser: UserType = {
            uid: user?.uid,
            email: user?.email || "",
            displayName: user?.displayName || "",
          };

          set({ user: cleanUser, isAnonymous: user?.isAnonymous || false });
        }
      },
      signOut: async () => {
        await signOut(auth);
        set({ user: null, isAnonymous: false });
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
