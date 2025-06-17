import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getCustomers } from "@/lib/database/customers";
import { Customer } from "@/models/Customer";

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    setLoading(true);
    const data = await getCustomers();
    setCustomers(data);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchCustomers();
    }, [])
  );

  return { customers, loading };
}
