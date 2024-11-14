import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Pressable} from 'react-native';
import { Client, Account, ID, Models } from 'react-native-appwrite';
import {useRouter} from "expo-router"
import React, { useState } from 'react';

let client: Client;
let account: Account;
const router=useRouter();
client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6736282800035887406e')   // Your Project ID
  .setPlatform('shaadi');   // Your package name / bundle identifier

account = new Account(client);
export default function Index() {
  const [loggedInUser, setLoggedInUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  async function register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
    setLoggedInUser(await account.get());
  }
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

