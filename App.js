import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import AppTimer from './screens/AppTimer'

import './global.js'
// import MenuStack from './components/MenuBar';

// const Main = createStackNavigator();

// function MainNavigator () {
//   return (
//     <Main.Navigator headerMode='none'>
      
//       <Main.Screen name='Login' component={Login} />
//       <Main.Scree name = 'Home' component={MenuStack} />
//       {/* <Main.Screen name='Timer' component={AppTimer} /> */}
      
//       <Main.Screen name='SignUp' component={SignUp} />
//       {/* <Main.Screen name='Home' component={Home} /> */}

//       {/* <MenuBar/> */}
//       {/* {global.user_token != '' ? (<MenuBar/>) : null} */}
//     </Main.Navigator>
//   );
// };

// function TabStack()
// {
//   return(
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="AppTimer" component={AppTimer} />
//       {/* <Tab.Screen name="Notifications" component={Notifications} /> */}
//     </Tab.Navigator>
//   )
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name='Timer' component={AppTimer} /> */}
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="MenuStack" component={MenuStack} /> */}
        
        <Stack.Screen name = 'Home' component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
