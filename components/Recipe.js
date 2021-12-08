import React from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';

// const Recipe = ({ title, description }) => {
//   return (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}{"\n"}{description}</Text>
//     </View>
//   );
// }
const Recipe = ({ title }) => {
    return(
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
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