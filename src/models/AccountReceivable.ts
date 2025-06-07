export interface AccountReceivable {
  id: number;
  promissoryId: number;
  receiptDate: Date;
  amount: number;
  paymentMethod: "cash" | "credit" | "debit" | "pix";
}
