import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "@/components/ui/Button";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}>Bem vindo ao RstoreApp!</Text>
      <Text style={styles.title}>Painel da Loja</Text>

      <View style={styles.summaryContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vendas do mês</Text>
          <Text style={styles.cardValue}>R$ 7.777,77</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Produtos</Text>
          <Text style={styles.cardValue}>227</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Receber</Text>
          <Text style={styles.cardValue}>R$ 9.999,99</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pagar</Text>
          <Text style={styles.cardValue}>R$ 99,99</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acessos rápidos</Text>
        <Button
          title="Clientes"
          onPress={() => router.push("/drawer/customers")}
          buttonStyle={styles.button}
        />
        <Button
          title="Fornecedores"
          onPress={() => router.push("/drawer/suppliers")}
          buttonStyle={styles.button}
        />
        <Button
          title="Produtos"
          onPress={() => router.push("/drawer/products")}
          buttonStyle={styles.button}
        />
        <Button
          title="Vendas"
          onPress={() => router.push("/drawer/sales")}
          buttonStyle={styles.button}
        />
        <Button
          title="Promissórias"
          onPress={() => router.push("/drawer/promissories")}
          buttonStyle={styles.button}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
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
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  button: {
    marginBottom: 12,
  },
});
