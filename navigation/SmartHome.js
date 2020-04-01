import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  // DrawerItemList,
  DrawerItem
 } from '@react-navigation/drawer';
import { StyleSheet, View, Dimensions } from 'react-native'
// import Animated from 'react-native-reanimated';
import Settings from './../screens/Settings'
import Dashboard from './../screens/Dashboard'

import HomeIcon from './../components/icons/HomeIcon'
import SettingsIcon from './../components/icons/SettingsIcon'


const Drawer = createDrawerNavigator(),
  windowHeight = Dimensions.get('window').height;

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/*<DrawerItemList {...props} />*/}
      <View style={styles.drawers}>
        <DrawerItem 
          label="Dashboard"
          labelStyle={styles.drawerLabel}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Dashboard')}
          icon={() => <HomeIcon />}
        />
        <DrawerItem 
          label="Settings"
          labelStyle={styles.drawerLabel}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Settings')}
          icon={() => <SettingsIcon />}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function SmartHome() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        drawerContent={props => {
          return <CustomDrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Dashboard" component={Dashboard} />
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
  drawers: {
    flex: 1,
    height: windowHeight / 2,
    justifyContent: 'center',
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