// features/customers/components/CustomerInfo.tsx
import { Text, StyleSheet } from "react-native";
import { Customer } from "@/models/Customer";

type Props = {
  customer: Customer;
};

export function CustomerInfo({ customer }: Props) {
  return (
    <>
      <Text style={styles.name}>{customer.name}</Text>
      <Text style={styles.phone}>Telefone: {customer.phone}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  name: { fontSize: 24, fontWeight: "700", color: "#333", marginBottom: 8 },
  phone: { fontSize: 16, color: "#555", marginBottom: 24 },
});
