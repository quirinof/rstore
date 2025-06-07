export interface Promissory {
  id: number;
  customerId: number;
  issueDate: Date;
  totalAmount: number;
  pendingAmount: number;
  status: "open" | "partial" | "paid";
}
