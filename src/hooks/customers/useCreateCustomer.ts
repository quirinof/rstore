import { useState } from "react";
import { createCustomer } from "@/lib/database/customers";

export function useCreateCustomer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  async function handleCreateCustomer(name: string, phone: string) {
    try {
      setLoading(true);
      setError(null);

      await createCustomer(name, phone);
    } catch (err) {
      setError(err as Error);
      console.error("Erro ao criar cliente:", err);
      throw err; // pode ser útil para tratar diretamente na tela
    } finally {
      setLoading(false);
    }
  }

  return {
    createCustomer: handleCreateCustomer,
    loading,
    error,
  };
}
