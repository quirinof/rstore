import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Button } from "@/components/ui/Button";
import { useCreateCustomer } from "@/hooks/customers/useCreateCustomer";
import { Stack } from "expo-router";

export default function NewCustomerScreen() {
  const router = useRouter();
  const { createCustomer } = useCreateCustomer();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    await createCustomer(name, phone);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Novo Cliente" }} />
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
  },
});
