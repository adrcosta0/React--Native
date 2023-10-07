import React, { Component, useState } from 'react';
import {  View, 
          StyleSheet, 
          FlatList, 
          Text, 
          Linking } 
from 'react-native';


function App(){

  let vagas = [
        {id: 1, 
        funcao: 'Analista de Suporte Junior', 
        salario: 4000, 
        descricao: 'Prover suporte técnico garantindo alta disponibilidade e performance, das plataformas dos clientes, e quando  necessário, orientar e treinar os usuários.', 
        empresa: 'SOC', 
        link: 'https://www.soc.com.br/',
        contato: '(13) 3202-9111'},

        {id: 2, 
        funcao: 'Desenvolvedor Front-End Pleno', 
        salario: 8000, 
        descricao: 'Profissional especializado em criar a interface visual e interativa de um site ou aplicação web.', 
        empresa: 'ModalGR',
        link: 'https://modalgr.com.br/',
        contato: '(13) 4101-0010'},

        {id: 3, 
        funcao: 'Programador Java Senior', 
        salario: 12000, 
        descricao: 'Identificar e analisar requisitos de usuários. Priorizar, atribuir e executar tarefas durante todo o ciclo de vida de desenvolvimento de softwares. Desenvolver aplicativos Java EE.', 
        empresa: 'T2S Tecnologia',
        link: 'https://www.t2s.com.br/',
        contato: '(13) 3329-6601'},

        {id: 4, 
        funcao: 'Técnico de Informática', 
        salario: 3200, 
        descricao: 'Configurar hardwares e instalar e configurar softwares e drivers. Manter e reparar equipamentos tecnológicos (por exemplo, roteadores) ou dispositivos periféricos. Instalar redes LAN/WAN funcionais e outras redes e gerenciar componentes (servidores, IPs etc.).',
        empresa: 'Plano Santa Saude',
        link: 'https://planosantasaude.com.br/',
        contato: '(13) 4007-2250'},

        {id: 5, 
        funcao: 'Analista de Sistema', 
        salario: 4500, 
        descricao: 'É o responsável pela captura das regras de negócio, dos requisitos de sistema e documentos de apoio ao desenvolvimento.', 
        empresa: 'Unimed Santos',
        link: 'https://www.unimed.coop.br/site/web/santos',
        contato: '(13) 3281-8200'},

        {id: 6, 
        funcao: 'Cientista de Dados Junior', 
        salario: 5000, 
        descricao: ' lidar com tarefas de negócios específicas usando ferramentas, sistemas e conjuntos de dados existentes.',
        empresa: 'Nubank',
        link: 'https://nubank.com.br/',
        contato: '0800 591 2117'},
      ]


  const [feed, setFeed] = useState(vagas)


  return(
    <View style={styles.container}>
      <Text style={styles.title}>Vagas</Text>
      <FlatList showsVerticalScrollIndicator={false}
      data={feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Vagas data={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ccc'
  },
  title:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 30,
    marginBottom: 30,
  },
  area:{
    borderWidth: 2,
    padding: 5,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  titleFuncao:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    margin: 5
  },
  text:{
    fontWeight:'bold',
    marginBottom: 5
  },
  textDesc:{
    textDecorationLine: 'underline'
  }
})

export default App;

function Vagas(props){
  return(
    <View style={styles.area}>
      <Text style={styles.titleFuncao}> {props.data.funcao} </Text>
      <Text style={{margin: 3}}> 
          <Text style={styles.text}>Salário: </Text> 
          R${props.data.salario},00 
      </Text>
      <Text style={{margin: 3}}>
          <Text style={styles.text}>Descrição: </Text> 
          <Text style={styles.textDesc}>{props.data.descricao} </Text>
      </Text>
      <Text style={{margin: 3}}>
          <Text style={styles.text} onPress={()=> {Linking.openURL(props.data.link)}}>Empresa: </Text>
          {props.data.empresa}
      </Text>
      <Text style={{margin: 3}}> 
          <Text style={styles.text}>Contato: </Text>
          {props.data.contato} 
      </Text>
    </View>
  );
}