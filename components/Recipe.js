import React from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';

const Recipe = ({ item, navigation }) => {
  item = global.item_view;
  console.log(item);

    return(
    <View style={styles.container}>
      <Text style={styles.item}>{item.recipeName}</Text>
    </View>
  )};

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

export default Recipe;