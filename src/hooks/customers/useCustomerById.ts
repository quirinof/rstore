import { useEffect, useState } from "react";
import { findCustomerById } from "@/lib/database/customers";
import { Customer } from "@/models/Customer";

export function useCustomerById(id: number) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomer() {
      setLoading(true);
      const result = await findCustomerById(id);
      setCustomer(result);
      setLoading(false);
    }

    fetchCustomer();
  }, [id]);

  return { customer, loading };
}
