// src/data/sales.ts
import { Sale } from "../models/Sale";

export const sales: Sale[] = [
  {
    id: 1,
    saleDate: new Date("2025-06-01"),
    customerId: 1,
    saleType: "cash",
    totalValue: 75.9,
  },
  {
    id: 2,
    saleDate: new Date("2025-06-02"),
    customerId: 2,
    saleType: "pix",
    totalValue: 120.0,
  },
  {
    id: 3,
    saleDate: new Date("2025-06-03"),
    customerId: 3,
    saleType: "credit",
    totalValue: 200.0,
  },
  {
    id: 4,
    saleDate: new Date("2025-06-03"),
    customerId: 4,
    saleType: "debit",
    totalValue: 54.5,
  },
  {
    id: 5,
    saleDate: new Date("2025-06-04"),
    customerId: 2,
    saleType: "cash",
    totalValue: 30.0,
  },
  {
    id: 6,
    saleDate: new Date("2025-06-04"),
    customerId: 5,
    saleType: "credit",
    totalValue: 340.0,
  },
  {
    id: 7,
    saleDate: new Date("2025-06-05"),
    customerId: 6,
    saleType: "pix",
    totalValue: 92.0,
  },
];
