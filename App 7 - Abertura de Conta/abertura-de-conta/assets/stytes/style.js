import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  area:{
    margin: 15
  },
  areaInfo:{
    borderWidth: 2,
    marginTop: 20
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center'
  },
    tituloInfo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center'
  },
  dados:{
    margin: 5,
    fontWeight: 'bold'
  },
  input:{
    width: 200,
    borderWidth: 0, // Remover a borda
    borderColor: 'black', // Tornar a cor da borda transparente
    borderBottomWidth: 1,
    outline: 0
  },
  picker:{
    marginLeft: 5,
    borderRadius: 5,
    borderWidth: 3
  },
  limite:{
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
    valor:{
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  switch:{
    marginLeft: 10,
    marginRight: 10,
    with: 15,
    height: 15
  }
});

export {styles}