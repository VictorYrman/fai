// Organisms Components
import Header from "@/components/organisms/Header";

// External Components
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, headerTransparent: true, header: () => <Header /> }}>
      </Stack.Screen>
      <Stack.Screen name="survey" options={{ headerShown: true, headerTransparent: true, header: () => <Header /> }}>
      </Stack.Screen>
      <Stack.Screen name="demo" options={{ headerShown: true, headerTransparent: true, header: () => <Header /> }}></Stack.Screen>
      <Stack.Screen name="signin" options={{ headerShown: true, headerTransparent: true, header: () => <Header /> }}>
      </Stack.Screen>
      <Stack.Screen name="(tabs)" options={{ headerShown: true, headerTransparent: true, header: () => <Header /> }}>
      </Stack.Screen>
    </Stack>
  );
}
