import { PurchaseItem } from "@/models/PurchaseItem";

export const purchaseItems: PurchaseItem[] = [
  {
    id: 1,
    purchaseId: 1,
    productId: 2,
    quantity: 10,
    unitCost: 20.0,
  },
  {
    id: 2,
    purchaseId: 1,
    productId: 3,
    quantity: 20,
    unitCost: 8.0,
  },
  {
    id: 3,
    purchaseId: 2,
    productId: 4,
    quantity: 12,
    unitCost: 22.5,
  },
  {
    id: 4,
    purchaseId: 3,
    productId: 1,
    quantity: 5,
    unitCost: 65.0,
  },
  {
    id: 5,
    purchaseId: 4,
    productId: 8,
    quantity: 4,
    unitCost: 28.0,
  },
  {
    id: 6,
    purchaseId: 5,
    productId: 5,
    quantity: 3,
    unitCost: 60.0,
  },
  {
    id: 7,
    purchaseId: 5,
    productId: 6,
    quantity: 2,
    unitCost: 80.0,
  },
  {
    id: 8,
    purchaseId: 6,
    productId: 9,
    quantity: 6,
    unitCost: 50.0,
  },
];
