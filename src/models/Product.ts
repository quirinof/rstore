export interface Product {
  id: number;
  name: string;
  stockQuantity: number;
  currentPrice: number;
  unitOfMeasure?: "kg" | "g" | "l" | "ml" | "unidade";
  category?: "Casa" | "Higiene" | "Outros";
  brand?: string;
}
