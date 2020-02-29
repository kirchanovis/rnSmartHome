import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SmartHome from './navigation/SmartHome';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SmartHome" component={SmartHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
