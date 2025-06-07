import { Promissory } from "@/models/Promissory";

export const promissories: Promissory[] = [
  {
    id: 1,
    customerId: 1,
    issueDate: new Date("2025-05-10"),
    totalAmount: 150.0,
    pendingAmount: 150.0,
    status: "open",
  },
  {
    id: 2,
    customerId: 3,
    issueDate: new Date("2025-05-15"),
    totalAmount: 200.0,
    pendingAmount: 100.0,
    status: "partial",
  },
  {
    id: 3,
    customerId: 5,
    issueDate: new Date("2025-05-20"),
    totalAmount: 340.0,
    pendingAmount: 0.0,
    status: "paid",
  },
  {
    id: 4,
    customerId: 2,
    issueDate: new Date("2025-06-01"),
    totalAmount: 90.0,
    pendingAmount: 60.0,
    status: "partial",
  },
  {
    id: 5,
    customerId: 4,
    issueDate: new Date("2025-06-03"),
    totalAmount: 54.5,
    pendingAmount: 54.5,
    status: "open",
  },
];
