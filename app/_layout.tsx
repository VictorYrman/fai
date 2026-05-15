// Molecules Components
import Header from "@/components/molecules/Header";

// External Dependencies
import { Stack } from "expo-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "@react-native-firebase/auth";

// Config
import { auth } from "@/config/firebase";

// Store
import { useAuthStore } from "@/store/useAuthStore";
import { useReferenceStore } from "@/store/useReferenceStore";
import { useProfileStore } from "@/store/useProfileStore";

export default function RootLayout() {
  const { user, setUser } = useAuthStore();
  const { getExercises } = useReferenceStore();
  const { getProfile } = useProfileStore();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    getExercises();

    if (user) {
      getProfile();
    }
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="survey"></Stack.Screen>
      <Stack.Screen name="demo"></Stack.Screen>
      <Stack.Screen name="signin"></Stack.Screen>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
