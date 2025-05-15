import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { NativeModules } from 'react-native'

const { Random } = NativeModules

export default function App() {
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const handleGetRandom = async () => {
    try {
      const res = await Random.getRandomNumber(parseInt(min), parseInt(max))
      setResult(res)
    } catch (e) {
      setResult(NaN)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Min"
        keyboardType="numeric"
        value={min}
        onChangeText={setMin}
      />
      <TextInput
        style={styles.input}
        placeholder="Max"
        keyboardType="numeric"
        value={max}
        onChangeText={setMax}
      />
      <Button title="Get Random Number" onPress={handleGetRandom} />
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  result: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
