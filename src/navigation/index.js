import React, { useState } from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';

import { theme } from '../constants/';

const AppStack = createStackNavigator();

export default function Navigation () {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        screenOptions={{ 
          headerStyle: {
            height: theme.sizes.base * 4,
            backgroundColor: theme.colors.white,
            borderBottomColor: 'transparent',
            elevation:0 //sem borda inferior para android
          },
          headerTitle: null,
          headerBackImage: () => (<Image source={require('../../assets/icons/back.png')}/>),
          headerBackTitle: null,
          headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: theme.sizes.base * 2,
            paddingRight: theme.sizes.base
          },
          headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: theme.sizes.base
          },
        }}
      >
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Signup" component={Signup} />
        <AppStack.Screen name="Forgot" component={Forgot} />
        <AppStack.Screen name="Explore" component={Explore} />
        <AppStack.Screen name="Browse" component={Browse} />
        <AppStack.Screen name="Product" component={Product} />
        <AppStack.Screen name="Settings" component={Settings} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}