import { db } from "@/lib/database";

export async function createTables() {
  await db.execAsync(`
    PRAGMA foreign_keys = ON;

    -- Usuários
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );

    -- Clientes
    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT
    );

    -- Fornecedores
    CREATE TABLE IF NOT EXISTS suppliers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT
    );

    -- Produtos
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      stock_quantity INTEGER NOT NULL DEFAULT 0,
      current_price REAL NOT NULL,
      category TEXT,
      brand TEXT
    );

    -- Vendas
    CREATE TABLE IF NOT EXISTS sales (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sale_date TEXT NOT NULL,
      customer_id INTEGER NOT NULL,
      sale_type TEXT NOT NULL,
      total_value REAL NOT NULL,
      FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
    );

    -- Itens da venda
    CREATE TABLE IF NOT EXISTS sale_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sale_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      quantity INTEGER NOT NULL,
      unit_price REAL NOT NULL,
      FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE,
      FOREIGN KEY (product_id) REFERENCES products(id)
    );

    -- Promissórias
    CREATE TABLE IF NOT EXISTS promissories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_id INTEGER NOT NULL,
      issue_date TEXT NOT NULL,
      total_amount REAL NOT NULL,
      pending_amount REAL NOT NULL,
      status TEXT NOT NULL,
      FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
    );

    -- Movimentações da promissória
    CREATE TABLE IF NOT EXISTS promissory_movements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      promissory_id INTEGER NOT NULL,
      movement_date TEXT NOT NULL,
      type TEXT NOT NULL,
      amount REAL NOT NULL,
      note TEXT,
      FOREIGN KEY (promissory_id) REFERENCES promissories(id) ON DELETE CASCADE
    );

    -- Compras de fornecedor
    CREATE TABLE IF NOT EXISTS supplier_purchases (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      supplier_id INTEGER NOT NULL,
      purchase_date TEXT NOT NULL,
      total_value REAL NOT NULL,
      payment_type TEXT NOT NULL,
      FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE CASCADE
    );

    -- Itens da compra
    CREATE TABLE IF NOT EXISTS purchase_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      purchase_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      quantity INTEGER NOT NULL,
      unit_price REAL NOT NULL,
      FOREIGN KEY (purchase_id) REFERENCES supplier_purchases(id) ON DELETE CASCADE,
      FOREIGN KEY (product_id) REFERENCES products(id)
    );

    -- Contas a pagar
    CREATE TABLE IF NOT EXISTS accounts_payable (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      supplier_purchase_id INTEGER NOT NULL,
      due_date TEXT NOT NULL,
      amount REAL NOT NULL,
      paid INTEGER NOT NULL DEFAULT 0, -- 0 = false, 1 = true
      payment_date TEXT,
      installment INTEGER NOT NULL,
      FOREIGN KEY (supplier_purchase_id) REFERENCES supplier_purchases(id) ON DELETE CASCADE
    );

    -- Contas a receber
    CREATE TABLE IF NOT EXISTS accounts_receivable (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      promissory_id INTEGER NOT NULL,
      receipt_date TEXT NOT NULL,
      amount REAL NOT NULL,
      payment_method TEXT NOT NULL,
      FOREIGN KEY (promissory_id) REFERENCES promissories(id) ON DELETE CASCADE
    );
  `);
}
