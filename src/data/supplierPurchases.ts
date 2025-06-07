import { SupplierPurchase } from "@/models/SupplierPurchase";

export const supplierPurchases: SupplierPurchase[] = [
  {
    id: 1,
    supplierId: 1,
    purchaseDate: new Date("2025-05-15"),
    totalValue: 320.0,
    paymentType: "pix",
  },
  {
    id: 2,
    supplierId: 2,
    purchaseDate: new Date("2025-05-18"),
    totalValue: 500.0,
    paymentType: "credit",
  },
  {
    id: 3,
    supplierId: 3,
    purchaseDate: new Date("2025-05-20"),
    totalValue: 270.5,
    paymentType: "cash",
  },
  {
    id: 4,
    supplierId: 5,
    purchaseDate: new Date("2025-05-28"),
    totalValue: 150.0,
    paymentType: "debit",
  },
  {
    id: 5,
    supplierId: 6,
    purchaseDate: new Date("2025-06-01"),
    totalValue: 430.0,
    paymentType: "credit",
  },
  {
    id: 6,
    supplierId: 4,
    purchaseDate: new Date("2025-06-03"),
    totalValue: 190.0,
    paymentType: "pix",
  },
];
