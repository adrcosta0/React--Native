import {View, Text, Button} from 'react-native'
import {useState} from 'react'
import {styles} from './styles/style'

export default function App() {

  const [contador,setContador] = useState(0);

  function contar(aumentar){
    if(aumentar){
      setContador(contador + 1)
    } else if(contador > 0) {
        setContador(contador - 1)
    }
  }

  return(

    <View style={{margin: 20}}>
      <Text style={styles.titulo}>Contador de Pessoas</Text>

      <Text style={{fontSize: 50, textAlign: 'center', color: contador > 10 ? 'red' : 'blue'}}>{contador}</Text>

      <Button title="+" onPress={() => contar(true)}/>
      <br/>
      <Button color='red' title="-" onPress={() => contar(false)}/>
    </View>

  )
}