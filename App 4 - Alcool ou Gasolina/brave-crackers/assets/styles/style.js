import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

  area:{
    margin: 15
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textDecorationLine: 'underline'
  },
  image:{
    alignItems: 'center',
    width: 300,
    height: 200,
    border: 'solid',
    borderColor: '#aaa',
    borderRadius: 50,
    marginBottom: 10
  },
  input:{
    height: 30,
    backgroundColor: '#ddd',
    fontSize: 15,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#aaa',
    margin: 10,

  },
  button:{
    height: 30,
    width: 100,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    paddingTop: 4,
    margin: 20,
    marginLeft: 100
  },
  textButton:{
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },
  resultado:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export {styles}