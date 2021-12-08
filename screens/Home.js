import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Button from '../components/Button';
import MenuBar from '../components/MenuBar';

import '../global.js'

 const Home = ({navigation, item}) => {
  return (
    <View style={styles.container}>

      <Button label='Logout'
          // onPress={handleSubmit}
          onPress = {() => {
            global.user_token = '';
            navigation.navigate('Login');
            console.log("Logged out, user token is now " + global.user_token);
            console.log(global.user_token != '.');
            }
          }
           />

           <MenuBar/>
    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});

export default Home;