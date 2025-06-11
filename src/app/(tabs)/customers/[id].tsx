import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { customers } from "@/data/customers";
import { sales } from "@/data/sales";
import { promissories } from "@/data/promissories";

export default function CustomerDetailPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const customerId = Number(id);
  const customer = customers.find((c) => c.id === customerId);

  if (!customer) {
    return (
      <View>
        <Text style={styles.notFound}>Cliente não encontrado.</Text>
      </View>
    );
  }

  const customerSales = sales.filter((sale) => sale.customerId === customerId);
  const customerPromissories = promissories.filter(
    (p) => p.customerId === customerId
  );

  const handleEdit = () => {
    alert("Função de edição em construção...");
  };

  const handleDelete = () => {
    Alert.alert(
      "Excluir cliente",
      `Tem certeza que deseja excluir ${customer.name}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            alert("Cliente excluído (simulado)");
            router.back();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerTitle: "Detalhes do cliente" }} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.name}>{customer.name}</Text>
        <Text style={styles.phone}>Telefone: {customer.phone}</Text>

        {/* Vendas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vendas</Text>
          {customerSales.length === 0 ? (
            <Text style={styles.emptyText}>Nenhuma venda registrada.</Text>
          ) : (
            customerSales.map((sale) => (
              <View style={styles.item} key={sale.id}>
                <Ionicons name="cart-outline" size={20} color="#444" />
                <Text style={styles.itemText}>
                  Venda #{String(sale.id).padStart(3, "0")} - R${" "}
                  {sale.totalValue.toFixed(2)} -{" "}
                  {sale.saleDate.toLocaleDateString("pt-BR")}
                </Text>
              </View>
            ))
          )}
        </View>

        {/* Promissórias */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Promissórias</Text>
          {customerPromissories.length === 0 ? (
            <Text style={styles.emptyText}>
              Nenhuma promissória registrada.
            </Text>
          ) : (
            customerPromissories.map((p) => (
              <View style={styles.item} key={p.id}>
                <Ionicons name="document-text-outline" size={20} color="#444" />
                <Text style={styles.itemText}>
                  Promissória #{String(p.id).padStart(3, "0")} - R${" "}
                  {p.totalAmount.toFixed(2)} - Emitida em:{" "}
                  {p.issueDate.toLocaleDateString("pt-BR")}
                </Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      {/* Ações fixadas no final */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton} onPress={handleEdit}>
          <Ionicons name="create-outline" size={28} color="#2e86de" />
          <Text style={styles.iconText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={28} color="#d63031" />
          <Text style={styles.iconText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 24,
    paddingTop: 64,
    paddingBottom: 24,
    flexGrow: 1,
  },
  notFound: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 32,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  phone: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fafafa",
  },
  iconButton: {
    alignItems: "center",
    flex: 1,
  },
  iconText: {
    marginTop: 4,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    minWidth: 60,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#2e86de",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  itemText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#444",
    flex: 1,
  },
  emptyText: {
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
});
