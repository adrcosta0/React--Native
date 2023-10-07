import { useState } from 'react';
import { View, StyleSheet, Text, Switch, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {styles} from './assets/stytes/style';


export default function App() {

const [nome, setNome] = useState('')
const [idade, setidade] = useState(0)
const [limite, setLimite] = useState(0)
const [sexo, setSexo] = useState('')
const [escolaridade, setEscolaridade] = useState('')
const [brasileiro, setBrasileiro] = useState(false)
const [dadosConfirmados, setDadosConfirmados] = useState(false)

function RetornoDados(props) {

setDadosConfirmados(true)

  return (
    <View  style={styles.areaInfo}>
      <Text style={styles.tituloInfo}>Dados informados</Text>
      <Text style={styles.dados}>Nome: {props.nome}</Text>
      <Text style={styles.dados}>Idade: {props.idade}</Text>
      <Text style={styles.dados}>Sexo: {props.sexo}</Text>
      <Text style={styles.dados}>Escolaridade: {props.escolaridade}</Text>
      <Text style={styles.dados}>Limite: R$ {props.limite}</Text>
      <Text style={styles.dados}>Brasileiro: {props.brasileiro ? 'Sim' : 'Não'}</Text>
    </View>
  )   
  
}

  return (

    <View style={styles.area}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <Text style={styles.dados}>
        Nome: <TextInput 
              style={styles.input}
              onChangeText={setNome}/>
      </Text>


      <Text style={styles.dados}> 
        Idade: <TextInput style={styles.input}
               onChangeText={setidade}
                />
      </Text>

      <Text style={styles.dados}>
        Sexo:
            <Picker 
            style={styles.picker}
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}>
              <Picker.Item key={1} value="Selecione" label="Selecione" />
              <Picker.Item key={2} value="Masculino" label="Masculino" />
              <Picker.Item key={3} value="Feminino" label="Feminino" />
            </Picker>
      </Text>

      <Text style={styles.dados}>Escolaridade:
            <Picker
            style={styles.picker}
            selectedValue={escolaridade}
            onValueChange={(itemValue) => setEscolaridade(itemValue)}>
              <Picker.Item key={1} value="Selecione" label="Selecione" />
              <Picker.Item key={2} value="Ensino Medio Completo" label="Ensino Medio Completo" />
              <Picker.Item key={3} value="Ensino Medio Imcompleto" label="Ensino Medio Imcompleto" />
              <Picker.Item key={4} value="Ensino Superior Completo" label="Ensino Superior Completo" />
              <Picker.Item key={5} value="Ensino Superior Imcompleto" label="Ensino Superior Imcompleto" />
            </Picker>
      </Text>

      <Text style={styles.limite}> Limite: </Text>
            <Slider
              value={limite}
              onValueChange={(value) => setLimite(value)}
              minimumValue={0}
              maximumValue={1000}
              step={0.01}
            />
      <Text style={styles.valor}>R$ {limite.toFixed(0)}</Text>

      <Text style={styles.dados}> Brasileiro: Não
                <Switch style={styles.switch}
                value={brasileiro}
                onValueChange={(value) => setBrasileiro(value)}
                thumbColor='red'
                  /> Sim
      </Text>

      <Button title='Confirmar' onPress={RetornoDados}/>
      
      {dadosConfirmados && (
        <RetornoDados nome={nome} 
                      idade={idade}
                      sexo={sexo}
                      escolaridade={escolaridade}
                      limite={limite}
                      brasileiro={brasileiro}/>
      )}
      
    </View>
  );
}