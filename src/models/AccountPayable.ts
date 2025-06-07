export interface AccountPayable {
  id: number;
  supplierPurchaseId: number;
  dueDate: Date;
  amount: number;
  paid: boolean;
  paymentDate?: Date;
  installment: number;
}
