import { AccountReceivable } from "@/models/AccountReceivable";

export const accountsReceivable: AccountReceivable[] = [
  {
    id: 1,
    promissoryId: 2,
    receiptDate: new Date("2025-05-25"),
    amount: 100.0,
    paymentMethod: "pix",
  },
  {
    id: 2,
    promissoryId: 3,
    receiptDate: new Date("2025-05-25"),
    amount: 200.0,
    paymentMethod: "credit",
  },
  {
    id: 3,
    promissoryId: 3,
    receiptDate: new Date("2025-06-01"),
    amount: 140.0,
    paymentMethod: "cash",
  },
  {
    id: 4,
    promissoryId: 4,
    receiptDate: new Date("2025-06-04"),
    amount: 30.0,
    paymentMethod: "debit",
  },
];
