import { Text } from 'react-native';
import React from 'react';
import ToolbarComponent from 'react-native-toolbar-component';

const NavBar = ({navigation}) => {

  return (
    <ToolbarComponent
      leftItem={{
        title: 'Timer',
        layout: 'title',
        onPress: () => {
          console.log('pressed timer');
        },
      }}

      righttem={{
        title: 'Home',
        layout: 'title',
        onPress: () => {
          console.log('pressed home');
        },
      }}

    >
      <Text>
        MegaBites
      </Text>

    </ToolbarComponent>
  );
}

export default NavBar;