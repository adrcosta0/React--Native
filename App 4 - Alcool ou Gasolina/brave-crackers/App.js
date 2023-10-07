import {View, Text, Pressable, Image, TextInput} from 'react-native'
import {useState} from 'react'
import {styles} from './assets/styles/style'

export default function App(){

const [alcool, setAlcool] = useState(0)
const [gasolina, setGasolina] = useState(0)
const [resultado, setResultado] = useState('')

  function verificarMelhorPreco(){

    if(alcool / gasolina < 0.7){
      setResultado('Melhor combustível: Álcool')
    } else if(alcool / gasolina > 0.7){
      setResultado('Melhor combustível: Gasolina')
    } else (
      setResultado('Insira os preços do Álcool e Gasolina')
    )
  }

  return(

    <View style={styles.area}>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      <Image style={styles.image}
      source={require('./assets/image/alcool_X_gasolina.png')}/>

      <TextInput style={styles.input}
      placeholder='Preço do Álcool'
      onChangeText={setAlcool}/>

      <TextInput style={styles.input}
      placeholder='Preço da Gasolina'
      onChangeText={setGasolina}/>

      <Pressable style={styles.button} onPress={() => verificarMelhorPreco(alcool, gasolina)}>
        <Text style={styles.textButton}>Verificar</Text>
      </Pressable>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  )
}
