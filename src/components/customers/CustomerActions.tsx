// features/customers/components/CustomerActions.tsx
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export function CustomerActions({ onEdit, onDelete }: Props) {
  return (
    <View style={styles.actions}>
      <TouchableOpacity style={styles.iconButton} onPress={onEdit}>
        <Ionicons name="create-outline" size={28} color="#2e86de" />
        <Text style={styles.iconText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={onDelete}>
        <Ionicons name="trash-outline" size={28} color="#d63031" />
        <Text style={styles.iconText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fafafa",
  },
  iconButton: { alignItems: "center", flex: 1 },
  iconText: {
    marginTop: 4,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    minWidth: 60,
  },
});
