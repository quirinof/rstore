import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/drawer/home");
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
