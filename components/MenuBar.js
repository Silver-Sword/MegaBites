// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// import AppTimer from '../screens/AppTimer'
// import Home from '../screens/Home';

// const Tab = createBottomTabNavigator();

// export default function MenuBar() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="AppTimer" component={AppTimer} />
//     </Tab.Navigator>
//   );
// }

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             // The `merge: true` option makes sure that the params inside the tab screen are preserved
//             navigation.navigate({ name: route.name, merge: true });
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// ...

{/* <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
  {...}
</Tab.Navigator>

function MyTabBar({ navigation }) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('SomeScreen');
      }}
    />
  );
} */}

import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {Home} from '../screens/Home.js'
import {AppTimer} from '../screens/AppTimer.js'

import HomeScreen from '../screens/HomeScreen.js'

function TimerScreen()
{
  return (
    // <AppTimer/>
    <Text>Hi</Text>
  )
}



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Timer!</Text>
    </View>
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
  return (
    <Tab.Navigator>
    {/* <Tab.Screen name="AppTimer" component={AppTimer} /> */}
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
  </Tab.Navigator>
  );
}