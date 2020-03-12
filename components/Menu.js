import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'


import * as theme from '../theme';
import BathroomIcon from './icons/BathroomIcon'
import BedroomIcon from './icons/BedroomIcon'
import KitchenIcon from './icons/KitchenIcon'
import LivingroomIcon from './icons/LivingroomIcon'

export default class Menu extends Component {
  state = { isActive: false };
  render() {
    const { onPressFirst } = this.props;

    return (
      <View style={styles.menu}>
        <View>
          <TouchableHighlight 
            onPress={() => onPressFirst('Settings')} 
            underlayColor="#eee"
          >
            <View style={styles.menuElem}>
              <KitchenIcon />
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight 
            onPress={() => onPressFirst('Settings')} 
            underlayColor="#eee"
          >
            <View style={styles.menuElemActive}>
              <LivingroomIcon active />
            </View>
          </TouchableHighlight>  
        </View>
        <View>
          <TouchableHighlight 
            onPress={() => onPressFirst('Settings')} 
            underlayColor="#eee"
          >
            <View style={styles.menuElem}>
              <BedroomIcon />
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight 
            onPress={() => onPressFirst('Settings')} 
            underlayColor="#eee"
          >
            <View 
              style={styles.menuElem}
            >
              <BathroomIcon />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuElem: {
    width: 64,
    height: 64,
    backgroundColor: '#E7E7E7',
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25
  },
  menuElemActive: {
    width: 96,
    height: 96,
    backgroundColor: '#ffc98f',
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    shadowColor: "#ffc98f",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 2,
  }
});