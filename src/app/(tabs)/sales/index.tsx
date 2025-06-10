import { useRouter, Stack } from "expo-router";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { sales } from "@/data/sales";
import { customers } from "@/data/customers";
import { Button } from "@/components/ui/Button";

export default function SalesScreen() {
  const router = useRouter();

  const getCustomerName = (id: number) => {
    const customer = customers.find((c) => c.id === id);
    return customer ? customer.name : "Cliente não encontrado";
  };

  const formatDate = (date: Date) => new Date(date).toLocaleDateString("pt-BR");

  const handleAddSale = () => {
    router.push("/sales/new");
  };

  const handleSelectSale = (id: number) => {
    router.push(`/sales/${id}`);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <FlatList
        data={sales}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelectSale(item.id)}
            style={styles.saleCard}
          >
            <Text style={styles.customerName}>
              {getCustomerName(item.customerId)}
            </Text>
            <Text style={styles.saleDate}>📅 {formatDate(item.saleDate)}</Text>
            <Text style={styles.saleType}>
              Tipo: {item.saleType === "cash" ? "À vista" : "Parcelado"}
            </Text>
            <Text style={styles.saleTotal}>
              Total: R$ {item.totalValue.toFixed(2)}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma venda registrada.</Text>
        }
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      <Button title="Registrar Nova Venda" onPress={handleAddSale} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  saleCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  saleDate: {
    fontSize: 14,
    color: "#555",
  },
  saleType: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  saleTotal: {
    fontSize: 14,
    color: "#2a9d8f",
    fontWeight: "600",
    marginTop: 4,
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 40,
  },
});
