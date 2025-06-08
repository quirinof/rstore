import { Stack } from "expo-router";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CustomersLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "",
          headerTintColor: "#2e86de",
          headerLeft: () => (
            <Link href="/drawer/customers" asChild>
              <Ionicons name="arrow-back" size={24} color="#2e86de" />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
