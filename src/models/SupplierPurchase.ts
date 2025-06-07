export interface SupplierPurchase {
  id: number;
  supplierId: number;
  purchaseDate: Date;
  totalValue: number;
  paymentType: "cash" | "credit" | "debit" | "pix";
}
