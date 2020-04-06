import React, { useState } from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';

import { theme } from '../constants/theme';

const AppStack = createStackNavigator();

export default function Navigation () {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        screenOptions={{ 
          headerShown: false
        }}
      >
        <AppStack.Screen name="Welcome" component={Welcome} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}