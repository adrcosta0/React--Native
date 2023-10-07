import {View, Text, Image, Linking } from 'react-native' 
import {styles} from './styles/style'

export default function App(){

const MyLink = () => {
  
 
const handleLinkPress = () => {
    
   
const url = 'https://www.example.com'; // Insira o URL que deseja abrir
    Linking.openURL(url);
  };

  
  };

    return(
      <View style={styles.area}>
        <Text style={styles.titulo}>
          App Meu Perfil
        </Text> 
         <Image style={styles.image}
        source={require('./image/1668260675961.jfif')}
      
      />

        <Text style={styles.info}>Documento</Text>
        <Text style={styles.doc}>CPF: 505.880.518-96</Text>

        <Text style={styles.info}>Formação</Text>
        <Text style={styles.doc}>Analise e Desenvolvimento de Sistemas</Text>

        <Text style={styles.info}>Experiência</Text>
        <Text style={styles.doc}>Auxiliar Técnico em Informática</Text>

        <Text style={styles.doc}>• Suporte ao Usuário (Telefônico, presencial e remoto)</Text>
        <Text style={styles.doc}>• Suporte aos softwares</Text>
        <Text style={styles.doc}>• Criação de acessos ao sistemas da empresa</Text>
        <Text style={styles.doc}>• Manutenção de Redes e Telefonia</Text>
        <Text style={styles.doc}>• Manutenção de Computadores</Text>
        <Text style={styles.doc}>• Monitorização e configuração de DVR</Text>
        <Text style={styles.doc}>• Instalação e configuração de impressoras</Text>

        <Text style={styles.info}>Projeto</Text>
        <Text style={styles.link} onPress={()=> {Linking.openURL('https://github.com/adrcosta0')}}>Clicar para ir ao repositório </Text>

      </View>
    ) 

}
