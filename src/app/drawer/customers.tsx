import { useRouter } from "expo-router";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button } from "@/components/ui/Button";
import { customers } from "@/data/customers";

export default function CustomersPage() {
  const router = useRouter();

  const handleAdd = () => {
    router.push("/drawer/customers/new");
  };

  const handleSelectCustomer = (id: number) => {
    router.push(`/drawer/customers/${id}`);
  };

  return (
    <View style={styles.container}>
      <Button
        title="+ Adicionar Cliente"
        onPress={handleAdd}
        buttonStyle={styles.addButton}
      />

      <FlatList
        data={customers}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleSelectCustomer(item.id)}
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
