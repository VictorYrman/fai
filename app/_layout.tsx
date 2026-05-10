// Organisms Components
import Header from "@/components/organisms/Header";

// External Dependencies
import { useEffect } from "react";
import { Stack } from "expo-router";

// Store
import { useReferenceStore } from "@/store/useReferenceStore";

export default function RootLayout() {
  const { getExercises } = useReferenceStore();

  useEffect(() => {
    getExercises();
  }, [getExercises]);

  return (
    <Stack screenOptions={{
      headerShown: true,
      headerTransparent: true,
      header: () => <Header />
    }}>
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="survey"></Stack.Screen>
      <Stack.Screen name="demo"></Stack.Screen>
      <Stack.Screen name="signin"></Stack.Screen>
      <Stack.Screen name="(tabs)"></Stack.Screen>
    </Stack>
  );
}
