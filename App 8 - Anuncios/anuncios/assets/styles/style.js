import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,  
    justifyContent: 'center'
  },
  area:{
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#ddd'
  },
  title:{
    fontSize: 50,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60
  },
  box:{
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    height: 250,
    width: 200,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  img:{
    height: 100,
    width: 160,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black'
  },
  text:{
    fontWeight: 'bold'
  }
});

export {styles}