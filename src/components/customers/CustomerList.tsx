import { FlatList, Text, StyleSheet } from "react-native";
import { Customer } from "@/models/Customer";
import { CustomerCard } from "./CustomerCard";

interface Props {
  customers: Customer[];
  onSelectCustomer?: (id: number) => void;
  isLoading?: boolean;
}

export function CustomerList({
  customers,
  onSelectCustomer,
  isLoading,
}: Props) {
  if (isLoading) {
    return <Text>Carregando clientes...</Text>;
  }

  if (customers.length === 0) {
    return <Text>Nenhum cliente encontrado.</Text>;
  }

  return (
    <FlatList
      data={customers}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <CustomerCard
          customer={item}
          onPress={() => onSelectCustomer?.(item.id)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 12,
  },
});
