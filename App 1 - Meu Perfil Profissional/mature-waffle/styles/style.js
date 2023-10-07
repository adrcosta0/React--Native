import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        backgroundColor: '#000',
        color: '#FFFFFF'
    },
    titulo:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 25,
        color: '#fff',
        fontWeight: 'bold'
    },
    image:{
      width: 200,
      height: 200,
      borderRadius: 200,
      border: 'solid',
      marginBottom: 20,
      marginTop: 20,
      marginLeft: 60
    },
    info:{
      fontWeight: 'bold',
      fontSize: 15,
      textDecorationLine: 'underline',
      color: '#fff',
      marginLeft: 10,
      marginBottom: 5 
    },
    doc:{
      fontSize: 13,
      color: '#fff',
      marginLeft: 20,
      marginBottom: 15 
    },
    link:{
      color: '#00f',
      textDecorationLine: 'underline',
      marginLeft: 20,
      marginBottom: 15 
    }

});


export {styles}
