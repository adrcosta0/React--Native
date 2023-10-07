import {View, Text, TextInput, Button} from 'react-native'
import {useState} from 'react'
import {styles} from './styles/style'

export default function App(){

const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)
const [result, setResult] = useState('')

    function multiplicador(){

      r = num1 * num2
      setResult('Resultado: ' + r)
    }

  return(

    <View style={styles.area}>
      <Text style={styles.titulo}>Multiplicador de números</Text>

      <TextInput
      style={styles.input} 
      placeholder='Digite o 1º número'
      onChangeText={setNum1}/>

      <TextInput
      style={styles.input} 
      placeholder='Digite o 2º número'
      onChangeText={setNum2}/>

      <Button title='Calcular' onPress={() => multiplicador(num1, num2)}/>

      <Text style={styles.result}>{result}</Text>
    </View>
    
  )
}