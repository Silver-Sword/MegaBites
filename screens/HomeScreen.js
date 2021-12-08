import React, {useEffect, useState} from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {getRecipesHome} from '../api_link/getRecipes.js';

const getRecipes = () => {
  setErrorMessage('');
  //console.log("email is " + email + " password is " + password);
  //login('gamergirl5001@gmail.com', 'happytest', true)  // currently on definite success
  getRecipesHome()
  .then((response) => {
    console.log(response);
    // if(response.success)
    // {
    //   global.user_token = response.token;
    //   console.log(global.user_token);
    //   console.log(global.user_token != '.');
    //   navigation.navigate('Home');
    // }

    // else
    // {
    //   setErrorMessage(response.error);
    // }

  })
  .catch((err) => setErrorMessage(err.message));

  console.log("recipe function successful");
};

export default function HomeScreen() {

  const [errorMessage, setErrorMessage] = useState('');
  // useEffect(() => {
  //   console.log("entered useEffect");
  //   getRecipes();
  //   console.log("completed recipe task hooray!");
  // }, [])


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}