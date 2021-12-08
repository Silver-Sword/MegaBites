import React, {useEffect, useState} from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {getRecipesHome} from '../api_link/getRecipes.js';
import {Recipe} from "../components/Recipe.js"

const Item = ({ title, description, info, navigation }) => (
  <TouchableOpacity 
    style={styles.item}
    //id={info}
    onPress={() => {global.item_view=info; navigation.navigate('RecipePage', item={info});}}
    //onPress={() => console.log(info)}
  >
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{description}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({navigation}) => {

  const [errorMessage, setErrorMessage] = useState('');

  const renderItem = ({ item }) => (
    <Item title={item.recipeName} description={item.desc} info={item} navigation={navigation}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={global.home_recipes}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        extraData={item => item}
        //onPress={(item) => {navigation.navigate("Recipe", {item})} }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffe1a8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: "black"
  },
  subtitle: {
    fontSize: 20,
  }
});

export default HomeScreen;