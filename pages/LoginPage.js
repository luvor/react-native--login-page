import { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import PrimaryButton from '../components/PrimaryButton'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login button pressed')
  }
  const navigateToRegister = () => {
    console.log('Register button pressed')
  }

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#8758FF', paddingVertical: 40, paddingHorizontal: 20, paddingTop: 80 }}>
        <Text style={styles.greeting}>Привет, познакомимся?</Text>
        <View style={{ backgroundColor: '#fff', marginTop: 20, paddingVertical: 20, paddingHorizontal: 20, borderRadius: 17 }}>
          <TextInput placeholderTextColor="#aaa" style={styles.textInput} placeholder="никнейм" onChangeText={(value) => setUsername(value)} value={username} />
          <TextInput placeholderTextColor="#aaa" secureTextEntry={true} style={styles.textInput} placeholder="пароль" value={password} onChangeText={(value) => setPassword(value)} />
        </View>
      </View>
      <View style={{ marginTop: 15, paddingHorizontal: 20, paddingVertical: 10 }}>
        <PrimaryButton onPress={handleLogin} title="Войти" />
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
        <PrimaryButton onPress={navigateToRegister} outlined title="Регистрация" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#eee',
    color: '#000',
    borderRadius: 10,
    marginVertical: 15,
    fontSize: 24,
    alignItems: 'start',
  },
})
