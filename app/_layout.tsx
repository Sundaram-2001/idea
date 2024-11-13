import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title:"Test-App",
        headerTitleAlign:"center"
      }}/>
      <Stack.Screen name ="login" options={{
        title:"Login",
        headerTitleAlign:"center"
      }}/>
      <Stack.Screen name="register" options={{
        title:"Register",
        headerTitleAlign:"center"
      }}
      />
    </Stack>
  );
}
