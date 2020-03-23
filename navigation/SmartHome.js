import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LivingroomScreens from './../screens/LivingroomScreens'
import KitchenScreens from './../screens/KitchenScreens'
import BedroomScreens from './../screens/BedroomScreens'
import BathroomScreens from './../screens/BathroomScreens'
import Settings from './../screens/Settings'





const Drawer = createDrawerNavigator();

function SmartHome() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Livingroom" component={LivingroomScreens} />
        <Drawer.Screen name="Kitchen" component={KitchenScreens} />
        <Drawer.Screen name="Bedroom" component={BedroomScreens} />
        <Drawer.Screen name="Bathroom" component={BathroomScreens} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default SmartHome;