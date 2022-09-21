import { StyleSheet, Button, View } from 'react-native'

export default function PrimaryButton({ title = '', onPress = '', outlined = false }) {
  return (
    <View style={outlined ? styles.outlinedContainer : styles.buttonContainer}>
      <Button color={outlined ? '#8758FF' : '#fff'} onPress={onPress} title={title} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 17,
    paddingHorizontal: 30,
    backgroundColor: '#8758FF',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlinedContainer: {
    borderRadius: 17,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    paddingVertical: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8758FF',
    justifyContent: 'center',
  },
})
