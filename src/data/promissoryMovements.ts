import { PromissoryMovement } from "@/models/PromissoryMovement";

export const promissoryMovements: PromissoryMovement[] = [
  {
    id: 1,
    promissoryId: 2,
    movementDate: new Date("2025-05-20"),
    type: "payment",
    amount: 100.0,
    note: "Pagamento parcial da promissória",
  },
  {
    id: 2,
    promissoryId: 3,
    movementDate: new Date("2025-05-25"),
    type: "payment",
    amount: 340.0,
    note: "Pagamento integral",
  },
  {
    id: 3,
    promissoryId: 4,
    movementDate: new Date("2025-06-02"),
    type: "payment",
    amount: 30.0,
    note: "Cliente pagou metade",
  },
  {
    id: 4,
    promissoryId: 4,
    movementDate: new Date("2025-06-04"),
    type: "charge",
    amount: 0,
    note: "Lembrete enviado ao cliente via WhatsApp",
  },
  {
    id: 5,
    promissoryId: 1,
    movementDate: new Date("2025-06-05"),
    type: "charge",
    amount: 0,
    note: "Cobrança inicial",
  },
];
