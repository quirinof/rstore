import { db } from "./index";
import { Customer } from "@/models/Customer";

export async function createCustomer(
  name: string,
  phone: string
): Promise<void> {
  await db.runAsync(`INSERT INTO customers (name, phone) VALUES (?, ?);`, [
    name,
    phone,
  ]);
}

export async function getCustomers(): Promise<Customer[]> {
  const result = await db.getAllAsync(`SELECT * FROM customers;`);
  return result as Customer[];
}

export async function findCustomerById(id: number): Promise<Customer | null> {
  const result = await db.getFirstAsync(
    `SELECT * FROM customers WHERE id = ?;`,
    [id]
  );
  return (result as Customer) || null;
}

export async function updateCustomer(id: number, name: string, phone: string) {
  await db.runAsync(`UPDATE customers SET name = ?, phone = ? WHERE id = ?;`, [
    name,
    phone,
    id,
  ]);
}

export async function deleteCustomer(id: number) {
  await db.runAsync(`DELETE FROM customers WHERE id = ?;`, [id]);
}
