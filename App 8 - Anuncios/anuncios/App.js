import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, FlatList } from 'react-native';
import {styles} from './assets/styles/style'




function App(){

let moto = [
  {id: 1, img: 'https://i.ytimg.com/vi/P47c3i-HCS4/maxresdefault.jpg', modelo: 'YS Fazer 250', ano: 2008, km: 56000, valor: 8000},
  {id: 2, img: 'https://i.ytimg.com/vi/lGshcmwb0To/maxresdefault.jpg', modelo: 'CG Titan', ano: 2015, km: 30000, valor: 12000},
  {id: 3, img: 'https://img.olx.com.br/images/24/241322315066751.jpg', modelo: 'Biz 125 ES', ano: 2011, km: 21500, valor: 8500},
  {id: 4, img: 'https://img.olx.com.br/images/82/829350559950433.jpg', modelo: 'Factor 125', ano: 2015, km: 35000, valor: 7500},
  {id: 5, img: 'https://img.olx.com.br/images/74/741393569724680.webp', modelo: 'Nmax 160 Abs', ano: 2019, km: 15000, valor: 16000},
  {id: 6, img: 'https://img.olx.com.br/images/95/959370768864875.webp', modelo: 'Lander 250', ano: 2022, km: 47000, valor: 20750},
  {id: 7, img: 'https://img.olx.com.br/images/24/249327569735469.webp', modelo: 'NXR 160 Bros', ano: 2016, km: 30000, valor: 15300},
  {id: 8, img: 'https://img.olx.com.br/images/61/617363328445228.webp', modelo: 'CBX 250 Twister', ano: 2006, km: 87000, valor: 8600}
]

const [feed, setFeed] = useState(moto)

  return(
    <View style={styles.container}>

    
      <Text style={styles.title}>Anúncios</Text>
      <View style={styles.area}>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Motos data={item}/>}
        />
      </View>
    </View>
  )
}

export default App;

function Motos(props){
  return(
    
      
      
        <View style={styles.box}>
            <Image source={{uri: props.data.img}} style={styles.img} />        

            <View>
              <Text style={styles.text}>Modelo: {props.data.modelo}</Text>
              <Text style={styles.text}>Ano: {props.data.ano}</Text>
              <Text style={styles.text}>Km: {props.data.km}</Text>
              <Text style={styles.text}>Valor: R${props.data.valor},00</Text>
            </View>
        </View>
     

  );
}
