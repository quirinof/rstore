// src/features/customers/screens/CustomersScreen.tsx
import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCustomers } from "@/hooks/customers/useCustomers";
import { CustomerList } from "@/components/customers/CustomerList";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";

export default function CustomersScreen() {
  const [filter, setFilter] = useState("");
  const { customers, loading } = useCustomers();
  const router = useRouter();

  const filtered = customers
    .filter((c) => c.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <TextInput
        placeholder="Pesquisar"
        value={filter}
        onChangeText={setFilter}
        style={styles.input}
      />

      <CustomerList
        customers={filtered}
        onSelectCustomer={(id) => router.push(`/customers/${id}`)}
        isLoading={loading}
      />

      <Button
        title="+ Adicionar Cliente"
        onPress={() => router.push("/customers/new")}
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});
