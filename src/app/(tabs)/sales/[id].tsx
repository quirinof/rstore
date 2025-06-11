import { View, Text, StyleSheet, Alert } from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { sales } from "@/data/sales";
import { customers } from "@/data/customers";
import { format } from "date-fns";
import { Button } from "@/components/ui/Button";

export default function SaleDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const saleId = Number(id);

  const sale = sales.find((s) => s.id === saleId);

  if (!sale) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Venda não encontrada.</Text>
      </View>
    );
  }

  const customer = customers.find((c) => c.id === sale.customerId);

  const handleEdit = () => {
    router.push(`/sales/edit/${sale.id}`);
  };

  const handleDelete = () => {
    Alert.alert("Excluir venda", "Tem certeza que deseja excluir esta venda?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: () => {
          console.log(`Excluir venda ${sale.id}`);
          router.replace("/(tabs)/sales");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Detalhes da venda" }} />

      <Text style={styles.label}>Cliente:</Text>
      <Text style={styles.value}>
        {customer?.name ?? "Cliente não encontrado"}
      </Text>

      <Text style={styles.label}>Data da Venda:</Text>
      <Text style={styles.value}>
        {format(new Date(sale.saleDate), "dd/MM/yyyy")}
      </Text>

      <Text style={styles.label}>Tipo de Venda:</Text>
      <Text style={styles.value}>
        {sale.saleType === "cash" ? "À vista" : "Parcelado"}
      </Text>

      <Text style={styles.label}>Valor Total:</Text>
      <Text style={styles.value}>R$ {sale.totalValue.toFixed(2)}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Editar Venda" onPress={handleEdit} />
        <Button title="Excluir Venda" onPress={handleDelete} variant="danger" />
      </View>
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
    color: "#888",
    marginTop: 12,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  notFound: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
  buttonContainer: {
    marginTop: 32,
    gap: 12,
  },
});
