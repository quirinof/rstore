import { useState } from "react";
import { useRouter, Stack } from "expo-router";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button } from "@/components/ui/Button";
import { customers } from "@/data/customers";

export default function CustomersPage() {
  const [filter, setFilter] = useState("");
  const router = useRouter();

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSelectCustomer = (id: number) => {
    router.push(`/customers/${id}`);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <TextInput
        placeholder="Pesquisar"
        value={filter}
        onChangeText={setFilter}
        style={styles.input}
      />

      <FlatList
        data={filteredCustomers}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleSelectCustomer(item.id)}
          >
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        title="+ Adicionar Cliente"
        onPress={() => alert("tela de adicionar cliente em construção...")}
        buttonStyle={styles.addButton}
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
  addButton: {
    backgroundColor: "#2e86de",
    marginBottom: 16,
  },
  list: {
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
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
