import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function NewMovementScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [type, setType] = useState<"payment" | "charge">("payment");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (!note.trim()) {
      Alert.alert("Erro", "A observação é obrigatória.");
      return;
    }

    if (type === "payment" && (!amount || isNaN(Number(amount)))) {
      Alert.alert("Erro", "Informe um valor válido para o pagamento.");
      return;
    }

    Alert.alert("Sucesso", "Movimentação registrada com sucesso!");
    router.back();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Novo Movimento" }} />

      <Text style={styles.label}>Tipo de Movimento</Text>
      <View style={styles.typeSelector}>
        <TouchableOpacity
          style={[styles.typeButton, type === "payment" && styles.activeButton]}
          onPress={() => setType("payment")}
        >
          <Text
            style={[
              styles.typeButtonText,
              type === "payment" && styles.activeText,
            ]}
          >
            Pagamento
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, type === "charge" && styles.activeButton]}
          onPress={() => setType("charge")}
        >
          <Text
            style={[
              styles.typeButtonText,
              type === "charge" && styles.activeText,
            ]}
          >
            Cobrança
          </Text>
        </TouchableOpacity>
      </View>

      {type === "payment" && (
        <>
          <Text style={styles.label}>Valor</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ex: 100.00"
            value={amount}
            onChangeText={setAmount}
          />
        </>
      )}

      <Text style={styles.label}>Observação</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        multiline
        placeholder="Ex: Cliente pagou metade..."
        value={note}
        onChangeText={setNote}
      />

      <Button title="Registrar Movimento" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 14,
  },
  typeSelector: {
    flexDirection: "row",
    marginBottom: 16,
  },
  typeButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 8,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  activeButton: {
    backgroundColor: "#2a9d8f",
    borderColor: "#2a9d8f",
  },
  typeButtonText: {
    color: "#333",
    fontWeight: "600",
  },
  activeText: {
    color: "#fff",
  },
});
