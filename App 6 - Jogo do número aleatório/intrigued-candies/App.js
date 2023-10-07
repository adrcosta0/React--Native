import {View, Text, Image, TextInput, Button} from 'react-native'
import {useState} from 'react'
import {styles} from './assets/styles/style'

export default function App(){

const nAleatorio = Math.floor(Math.random() * 11)
const [resultado, setResultado] = useState(0)

  return(

    <View style={styles.area}>
        <Text style={styles.titulo}>Jogo do Nº Alternativo</Text>

        <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1uh3CetZ9Pa4Tntgdxq7Q9Jgz0enw1XheEQlA1VwnQ7XDN8rTpNILkXKlcim2bBe9nQ&usqp=CAU' }}
        style={styles.img}
      />

    <Text style={styles.texto}>Pense em um número de 0 á 10</Text>    

    <Text style={styles.resultado}> Resultado: {resultado}</Text>

    <Button title='Descobrir' onPress={() => setResultado(nAleatorio)}/>

    </View>
  )
}