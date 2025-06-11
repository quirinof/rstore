import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}>Bem-vinda de volta 👋</Text>
      <Text style={styles.title}>Visão Geral da Loja</Text>

      <View style={styles.summaryContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vendas no mês</Text>
          <Text style={styles.cardValue}>R$ 7.777,77</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Produtos em estoque</Text>
          <Text style={styles.cardValue}>227</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>A receber</Text>
          <Text style={styles.cardValue}>R$ 9.999,99</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>A pagar</Text>
          <Text style={styles.cardValue}>R$ 99,99</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Últimas movimentações</Text>
      <View style={styles.movementItem}>
        <Text style={styles.movementText}>Pagamento - R$ 100,00</Text>
        <Text style={styles.movementNote}>Promissória #2</Text>
      </View>
      <View style={styles.movementItem}>
        <Text style={styles.movementText}>Cobrança enviada</Text>
        <Text style={styles.movementNote}>Promissória #4</Text>
      </View>
      <View style={styles.movementItem}>
        <Text style={styles.movementText}>Venda #203 concluída</Text>
        <Text style={styles.movementNote}>Cliente: Ana Paula</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
    backgroundColor: "#fff",
  },
  welcome: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
  },
  summaryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
    marginBottom: 32,
  },
  card: {
    width: "48%",
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  movementItem: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  movementText: {
    fontSize: 14,
    fontWeight: "600",
  },
  movementNote: {
    fontSize: 12,
    color: "#666",
  },
});
