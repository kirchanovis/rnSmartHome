import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
 } from '@react-navigation/drawer';
 import { StyleSheet } from 'react-native'
 import Animated from 'react-native-reanimated';
import LivingroomScreens from './../screens/LivingroomScreens'
import KitchenScreens from './../screens/KitchenScreens'
import BedroomScreens from './../screens/BedroomScreens'
import BathroomScreens from './../screens/BathroomScreens'
import Settings from './../screens/Settings'

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/*<DrawerItemList {...props} />*/}
      <DrawerItem 
        label="Custom"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Settings')}
      />
      <DrawerItem 
        label="Custom1"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate('Livingroom')}
      />
    </DrawerContentScrollView>
  );
}

function SmartHome() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 16],
  });

  
  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        drawerContent={props => {
          setProgress(props.progress);
          return <CustomDrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Livingroom" component={LivingroomScreens} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default SmartHome;

const styles = StyleSheet.create({
  stack: {
    // overflow: "hidden",
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: '#3a3434', borderWidth: 0},
  drawerItem: { alignItems: 'flex-start', marginVertical: 0, color: '#fff' },
  drawerLabel: { color: 'white'},
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});