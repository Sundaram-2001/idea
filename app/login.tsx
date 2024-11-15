import {Text,View} from "react-native"
import TextInput from './components/TextInput'
import Button from './components/Button'
import React , {useState} from 'react'
import { FIREBASE_AUTH } from "./FirebaseConfig";
export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loaing,setLoading]=useState(false);
  const auth=FIREBASE_AUTH
  return(
    <View style={{
      flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Login
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
        />
      </View>
      <Button label='Login' onPress={() => true} />
    </View>
  )
}