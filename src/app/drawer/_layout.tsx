import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Início",
          title: "Inicio",
        }}
      />
      <Drawer.Screen
        name="customers"
        options={{
          drawerLabel: "Clientes",
          title: "Gestão de Clientes",
        }}
      />
    </Drawer>
  );
}
