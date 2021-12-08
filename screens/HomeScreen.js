import React, {useEffect, useState} from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {getRecipesHome} from '../api_link/getRecipes.js';
import {Recipe} from "../components/Recipe.js"

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

  const renderItem = ({ item }) => (
    <Recipe title={item.recipeName} description={item.desc} />
  );

  return (
    <View>
      {global.home_recipes === "" ? 
      (<Text>No Recipes Found.  Follow People on Megabites to Get Some Recipes</Text>) :
      (<SafeAreaView style={styles.container}>
        <FlatList
          data={global.home_recipes}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});