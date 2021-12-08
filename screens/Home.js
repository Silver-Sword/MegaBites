import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Button from '../components/Button';
import MenuBar from '../components/MenuBar';

 const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button label='Logout'
          // onPress={handleSubmit}
          onPress = {() => navigation.navigate('Login')}
           />
        <MenuBar/>
    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;