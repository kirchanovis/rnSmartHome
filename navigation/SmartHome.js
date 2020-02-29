import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native'

import Dashboard from './../screens/Dashboard';
import Settings from './../screens/Settings';

export default createStackNavigator({
  Dashboard,
  Settings,
}, {
  initialRouteName: 'Dashboard',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#F9F9F9',
      borderBottomColor: "transparent",
      elevation: 0, // for android
      height: 0
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackImage: <Text>©</Text>,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: 10,
      paddingRight: 5,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: 5,
    },
  },
});