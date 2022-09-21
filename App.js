import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <View>
      <LoginPage />
      <StatusBar style="auto" />
    </View>
  )
}
