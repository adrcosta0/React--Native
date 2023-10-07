import {View, Text, Image, TextInput, Button} from 'react-native'
import {useState} from 'react'
import {styles} from './assets/styles/style'

export default function App(){

  const [verificar,setVerificar] = useState('')
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)

  function verificarIMC(){

    r = peso / (altura * altura);
   
      if(r < 18.5) {
        setVerificar('Abaixo do peso')
      } else if (r == 18.5 || r <= 24.9){
        setVerificar('Peso normal')
      } else if (r == 25 || r <= 29.9){
        setVerificar('Peso normal')
      } else if (r == 30 || r <= 34.9){
        setVerificar('Obesidade Grau I')
      } else if (r == 35 || r <= 39.9){
        setVerificar('Obesidade Grau II')
      } else if (r > 40) {
        setVerificar('Obesidade Grau III e Móbida')
      }
  }

  return(

    <View style={styles.area}>
        <Text style={styles.titulo}>Calculo de IMC</Text>

        <Image 
        source={{ uri: 'https://www.plasticadosonho.com.br/wp-content/uploads/2017/12/blog-06-como-calcular-o-imc.jpg' }}
        style={styles.img}
      />

    <TextInput
      style={styles.input}  
      placeholder="Peso"
      onChangeText={setPeso}
    />

    <TextInput
      style={styles.input}   
      placeholder="Altura"
      onChangeText={setAltura}
    />

    <Button title='Verificar' onPress={() => verificarIMC(peso, altura)}/>

    <Text style={styles.resultado}>{verificar}</Text>
    </View>
  )
}