import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    area:{
      margin: 15
    },
    titulo:{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    texto:{
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    img:{
      alignItems: 'center',
      width: 200, 
      height: 200,
      marginBottom: 20,
      marginTop: 20,
      marginLeft: 50
    },
    input:{
      height: 30,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 15,
      padding: 10,
    },
    resultado:{
      fontSize: 25,
      color: 'red',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10
    }
})

export {styles}