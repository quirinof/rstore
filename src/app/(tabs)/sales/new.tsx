import { useState } from "react";
import { Stack } from "expo-router";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "@/components/ui/Button";

export default function NewSaleScreen() {
  const [customerName, setCustomerName] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [saleType, setSaleType] = useState<"cash" | "installment">("cash");

  function handleRegisterSale() {
    if (!customerName || !totalValue) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    Alert.alert("Venda registrada", `Cliente: ${customerName}`);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Stack.Screen options={{ headerTitle: "Nova venda" }} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Cliente</Text>
        <TextInput
          placeholder="Nome do cliente"
          value={customerName}
          onChangeText={setCustomerName}
          style={styles.input}
        />

        <Text style={styles.label}>Valor Total</Text>
        <TextInput
          placeholder="R$ 0,00"
          keyboardType="decimal-pad"
          value={totalValue}
          onChangeText={setTotalValue}
          style={styles.input}
        />

        <Text style={styles.label}>Tipo de Venda</Text>
        <View style={styles.saleTypeContainer}>
          <TouchableOpacity
            style={[
              styles.saleTypeButton,
              saleType === "cash" && styles.saleTypeButtonSelected,
            ]}
            onPress={() => setSaleType("cash")}
          >
            <Text
              style={[
                styles.saleTypeText,
                saleType === "cash" && styles.saleTypeTextSelected,
              ]}
            >
              À vista
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.saleTypeButton,
              saleType === "installment" && styles.saleTypeButtonSelected,
            ]}
            onPress={() => setSaleType("installment")}
          >
            <Text
              style={[
                styles.saleTypeText,
                saleType === "installment" && styles.saleTypeTextSelected,
              ]}
            >
              A prazo
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Registrar Venda" onPress={handleRegisterSale} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  saleTypeContainer: {
    flexDirection: "row",
    gap: 12,
  },
  saleTypeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  saleTypeButtonSelected: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  saleTypeText: {
    fontSize: 16,
    color: "#000",
  },
  saleTypeTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginBottom: 36,
    marginHorizontal: 16,
  },
});
