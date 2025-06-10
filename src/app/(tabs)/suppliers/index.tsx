import { useRouter, Stack } from "expo-router";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button } from "@/components/ui/Button";
import { suppliers } from "@/data/suppliers";

export default function SuppliersPage() {
  const router = useRouter();

  // const handleSelectSupplier = (id: number) => {
  //   router.push(`/(tabs)/suppliers/${id}`);
  // };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Button
        title="+ Adicionar Fornecedor"
        onPress={() => alert("tela de adicionar fornecedor em construção...")}
        buttonStyle={styles.addButton}
      />

      <FlatList
        data={suppliers}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            // onPress={() => handleSelectSupplier(item.id)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#2e86de",
    marginBottom: 16,
  },
  list: {
    gap: 12,
  },
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  phone: {
    fontSize: 14,
    color: "#666",
  },
});
