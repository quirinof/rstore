import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Customer } from "@/models/Customer";

type Props = {
  customer: Customer;
  onPress?: () => void;
};

export function CustomerCard({ customer, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{customer.name}</Text>
      <Text style={styles.phone}>{customer.phone}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  phone: {
    fontSize: 14,
    color: "#666",
  },
});
