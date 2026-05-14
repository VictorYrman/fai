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

export default function RootLayout() {
  const { setUser } = useAuthStore();
  const { getExercises } = useReferenceStore();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    getExercises();
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
