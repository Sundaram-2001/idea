import { Text, View, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router=useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First React Native App from Mac!</Text>
      <Pressable
        style={[styles.button, styles.marginBottom]}
        onPress={() => {
          router.push("/login")
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          router.push("/register")
        }}
      >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginVertical: 16,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  marginBottom: {
    marginBottom: 16, 
  },
});