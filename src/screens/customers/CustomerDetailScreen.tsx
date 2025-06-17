// screens/customers/CustomerDetailScreen.tsx
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";
import { useCustomerById } from "@/hooks/customers/useCustomerById";
import { CustomerInfo } from "@/components/customers/CustomerInfo";
import { CustomerActions } from "@/components/customers/CustomerActions";
// import { CustomerSalesList } from "@/components/customers/CustomerSalesList";
// import { CustomerPromissoryList } from "@/components/customers/CustomerPromissoryList";

export default function CustomerDetailScreen() {
  const { id } = useLocalSearchParams();
  const customerId = Number(id);
  const router = useRouter();

  const { customer, loading } = useCustomerById(customerId);

  const handleEdit = () => {
    alert("Função de edição em construção...");
  };

  const handleDelete = () => {
    alert("Função de exclusão em construção...");
    router.back();
  };

  if (loading || !customer) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2e86de" />
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: "Detalhes do cliente" }} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CustomerInfo customer={customer} />
        {/* <CustomerSalesList sales={[]} /> */}
        {/* <CustomerPromissoryList promissories={[]} /> */}
      </ScrollView>
      <CustomerActions onEdit={handleEdit} onDelete={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: {
    padding: 24,
    paddingTop: 64,
    paddingBottom: 24,
    flexGrow: 1,
  },
  center: { flex: 1, justifyContent: "center" },
});
