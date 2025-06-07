export interface Sale {
  id: number;
  saleDate: Date;
  customerId: number;
  saleType: "cash" | "credit" | "debit" | "pix";
  totalValue: number;
}
