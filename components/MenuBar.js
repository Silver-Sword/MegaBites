import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {Home} from '../screens/Home.js'
import {AppTimer} from '../screens/AppTimer.js'

import HomeScreen from '../screens/HomeScreen.js'


function SettingsScreen({navigation}) 
{
  return 
  (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TouchableOpacity
        style={{
          borderRadius: 8,
          height: 50,
          width: 245,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f3834e'
        }}
        activeOpacity={0.7}
        onPress= {() => 
          navigation.navigate('AppTimer')
        }
      >
        <Text
          style={{ fontSize: 18, color: 'white', textTransform: 'uppercase' }}
        >
          Set Timer
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}

function TimerScreen() 
{
  return 
  (
    <AppTimer/>
  );
}


const Tab = createBottomTabNavigator();

// export default function MenuBar({navigation}) {
//   return (
//     <Tab.Navigator
//     // screenOptions={({ route }) => ({
//     //   tabBarIcon: ({ focused, color, size }) => {
//     //     let iconName;

//     //     if (route.name === 'Home') {
//     //       iconName = focused
//     //         ? 'ios-information-circle'
//     //         : 'ios-information-circle-outline';
//     //     } else if (route.name === 'Settings') {
//     //       iconName = focused ? 'ios-list-box' : 'ios-list';
//     //     }

//     //     // You can return any component that you like here!
//     //     return <Ionicons name={iconName} size={size} color={color} />;
//     //   },
//     //   tabBarActiveTintColor: 'tomato',
//     //   tabBarInactiveTintColor: 'gray',
//     // })}
//   >
//     <Tab.Screen name="Home" 
//       //onPress={navigation.navigate('Home', {navigation})} 
//       component={HomeScreen} />
//     <Tab.Screen name="Settings" component={SettingsScreen} />
//   </Tab.Navigator>
//   );
// }

export default function MenuBar()
{
  return 
  (
    <Tab.Navigator>

      {/* <Tab.Screen name="TimerScreen" component={TimerScreen} /> */}
      <Tab.Screen name="Timer" component={SettingsScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      
    </Tab.Navigator>
  );
}