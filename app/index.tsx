import { Text, View, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function BluetoothScanner() {
  const router = useRouter();

  return (
    <View>
      <Text>Screen for Bluetooth Device Scanner</Text>
      <Button title="Route to Water Intake Tracker" onPress={() => router.push("/water-intake-tracker")} />
    </View>
  );
}
