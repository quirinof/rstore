import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text } from "react-native";
import { products } from "@/data/products";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product)
    return <Text style={{ padding: 16 }}>Produto não encontrado.</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ headerTitle: "Detalhes" }} />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{product.name}</Text>
      <Text style={{ marginTop: 8 }}>Categoria: {product.category}</Text>
      <Text>Marca: {product.brand}</Text>
      <Text>Estoque: {product.stockQuantity}</Text>
      <Text>Preço atual: R$ {product.currentPrice.toFixed(2)}</Text>
    </View>
  );
}
