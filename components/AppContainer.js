import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 

import Home from '../screens/Home'
import AppTimer from '../screens/AppTimer'
import HomeScreen from '../screens/HomeScreen'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator();

function MainNavigator() 
{
  return 
  (
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='AppTimer' component={AppTimer}/>
      <Stack.Screen name='SignUp' component={SignUp} />

    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerStack() 
{
  return
  (
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />

    </Drawer.Navigator>
  )
} 


 export default function AppContainer() 
 {
  return
  (
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;