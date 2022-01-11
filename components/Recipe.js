import React from 'react';
import { Text, StyleSheet, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';

const Recipe = ({ item, navigation }) => {
  item = global.item_view;
  console.log(item);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text>
            <Text style={styles.title}>{item.recipeName}</Text>
            {'\n'}
            {'\n'}

            <Text style={styles.subtitle}>Description:</Text>
            {'\n'}
            <Text style={styles.desc}>{item.desc}</Text>
            {'\n'}
            {'\n'}

            <Text>Created By: {item.username}</Text>
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}

            <Text>Prep Time: {item.prepTime}</Text>
            {'\n'}
            <Text>Cook Time: {item.cookTime}</Text>
            {'\n'}
            <Text>Serving Count: {item.servingCount}</Text>
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}


            <Text style={styles.subtitle}>Ingredients: </Text>
            {'\n'}
            <Text>{item.ingredients}</Text>
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}

            <Text style={styles.subtitle}>Directions: </Text>
            <Text>{item.directions}</Text>
            </Text>
          </View>
        </ScrollView>
    </SafeAreaView>
  )};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      marginBottom: 50,
      marginRight: "3%",
      marginLeft: "3%"
    },

    item: {
      backgroundColor: '#f9c2ff',
      marginVertical: 8,
      marginHorizontal: 16,
    },

    title: {
      fontSize: 32,
      color: "black",
      alignItems: "center",
      fontWeight: "bold",
      padding: 20
    },
  });

export default Recipe;
