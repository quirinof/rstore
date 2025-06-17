import { Stack } from "expo-router";
import { useEffect } from "react";
import { createTables } from "@/lib/schema/createTables";

export default function RootLayout() {
  useEffect(() => {
    createTables();
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
