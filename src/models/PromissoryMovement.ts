export interface PromissoryMovement {
  id: number;
  promissoryId: number;
  movementDate: Date;
  type: "payment" | "adjustment" | "charge";
  amount: number;
  note?: string;
}
