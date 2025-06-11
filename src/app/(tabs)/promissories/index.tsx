import { useRouter, Stack } from "expo-router";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { promissories } from "@/data/promissories";
import { customers } from "@/data/customers";
import { Button } from "@/components/ui/Button";
import { Promissory } from "@/models/Promissory";

export default function PromissoryScreen() {
  const router = useRouter();

  const getCustomerName = (id: number) => {
    const customer = customers.find((c) => c.id === id);
    return customer ? customer.name : "Cliente não encontrado";
  };

  const formatDate = (date: Date) => new Date(date).toLocaleDateString("pt-BR");

  const formatStatus = (status: Promissory["status"]) => {
    switch (status) {
      case "open":
        return "Aberta";
      case "partial":
        return "Parcial";
      case "paid":
        return "Paga";
      default:
        return "Desconhecido";
    }
  };

  const handleAddPromissory = () => {
    router.push("/promissories/new");
  };

  const handleSelectPromissory = (id: number) => {
    router.push(`/promissories/${id}`);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <FlatList
        data={promissories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelectPromissory(item.id)}
            style={styles.promissoryCard}
          >
            <Text style={styles.customerName}>
              {getCustomerName(item.customerId)}
            </Text>
            <Text style={styles.issueDate}>
              📅 {formatDate(item.issueDate)}
            </Text>
            <Text style={styles.total}>
              Total: R$ {item.totalAmount.toFixed(2)}
            </Text>
            <Text style={styles.pending}>
              Pendente: R$ {item.pendingAmount.toFixed(2)}
            </Text>
            <Text style={[styles.status, getStatusStyle(item.status)]}>
              Status: {formatStatus(item.status)}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma promissória registrada.</Text>
        }
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      <Button
        title="Registrar Nova Promissória"
        onPress={handleAddPromissory}
      />
    </View>
  );
}

const getStatusStyle = (status: Promissory["status"]) => {
  switch (status) {
    case "open":
      return { color: "#e76f51" };
    case "partial":
      return { color: "#f4a261" };
    case "paid":
      return { color: "#2a9d8f" };
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  promissoryCard: {
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
  issueDate: {
    fontSize: 14,
    color: "#555",
  },
  total: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  pending: {
    fontSize: 14,
    color: "#f77f00",
    fontWeight: "600",
    marginTop: 2,
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 6,
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 40,
  },
});
