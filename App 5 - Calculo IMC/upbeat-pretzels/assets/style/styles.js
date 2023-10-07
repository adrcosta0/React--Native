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
    img:{
      alignItems: 'center',
      width: 300, 
      height: 200,
      marginBottom: 20,
      marginTop: 20
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
      color: 'green',
      textAlign: 'center',
      marginTop: 20
    }
})

export {styles}