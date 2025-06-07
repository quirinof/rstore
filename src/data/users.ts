import { User } from "@/models/User";

export const users: User[] = [
  {
    id: 1,
    name: "Admin",
    email: "admin@email.com",
    password: "admin123", // criptografado em producao
  },
];
