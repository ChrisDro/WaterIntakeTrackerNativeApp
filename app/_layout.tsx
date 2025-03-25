import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Bluetooth Device Scanner" }} />
      <Stack.Screen name="main" options={{ title: "Water Intake Tracker" }} />
    </Stack>
  );
}
