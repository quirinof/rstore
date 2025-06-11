import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { promissories } from "@/data/promissories";
import { customers } from "@/data/customers";
import { promissoryMovements } from "@/data/promissoryMovements";
import { Button } from "@/components/ui/Button";

export default function PromissoryDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const promissory = promissories.find((p) => p.id === Number(id));
  const customer = customers.find((c) => c.id === promissory?.customerId);

  const movements = promissoryMovements
    .filter((m) => m.promissoryId === Number(id))
    .sort((a, b) => b.movementDate.getTime() - a.movementDate.getTime());

  const formatDate = (date: Date) => new Date(date).toLocaleDateString("pt-BR");

  const formatCurrency = (value: number) =>
    `R$ ${value.toFixed(2).replace(".", ",")}`;

  const formatStatus = (status: string) => {
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

  const handleAddMovement = () => {
    router.push(`/promissories/${id}/new-movement`);
  };

  if (!promissory) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Promissória não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Detalhes da Promissória" }} />

      <View style={styles.card}>
        <Text style={styles.title}>{customer?.name}</Text>
        <Text style={styles.text}>
          📅 Emissão: {formatDate(promissory.issueDate)}
        </Text>
        <Text style={styles.text}>
          💰 Total: {formatCurrency(promissory.totalAmount)}
        </Text>
        <Text style={styles.text}>
          ⏳ Pendente: {formatCurrency(promissory.pendingAmount)}
        </Text>
        <Text style={[styles.status, getStatusStyle(promissory.status)]}>
          Status: {formatStatus(promissory.status)}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Movimentações</Text>
      <FlatList
        data={movements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.movementCard,
              item.type === "payment" ? styles.paymentCard : styles.chargeCard,
            ]}
          >
            <Text style={styles.movementDate}>
              📆 {formatDate(item.movementDate)}
            </Text>
            {item.type === "payment" && (
              <Text style={styles.movementAmount}>
                💸 {formatCurrency(item.amount)}
              </Text>
            )}
            <Text style={styles.movementDesc}>{item.note}</Text>
            <Text style={styles.movementType}>
              {item.type === "payment" ? "Pagamento" : "Cobrança"}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma movimentação registrada.</Text>
        }
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      <Button title="Registrar Movimento" onPress={handleAddMovement} />
    </View>
  );
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case "open":
      return { color: "#e63946" };
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 12,
  },
  movementCard: {
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  paymentCard: {
    backgroundColor: "#e0f7f1",
  },
  chargeCard: {
    backgroundColor: "#fceae4",
  },
  movementDate: {
    fontSize: 14,
    color: "#333",
  },
  movementAmount: {
    fontSize: 14,
    color: "#2a9d8f",
    fontWeight: "bold",
    marginTop: 2,
  },
  movementDesc: {
    fontSize: 13,
    color: "#444",
    marginTop: 4,
  },
  movementType: {
    fontSize: 12,
    marginTop: 6,
    fontStyle: "italic",
    color: "#888",
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
  },
});
