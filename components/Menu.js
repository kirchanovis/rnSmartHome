import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


import * as theme from '../theme';
import Bathroom from './icons/Bathroom'
import Bedroom from './icons/Bedroom'
import Kitchen from './icons/Kitchen'
import Livingroom from './icons/Livingroom'

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.menu}>
        <View>
          <View style={styles.menuElem}>
            <Bathroom />
          </View>
        </View>
        <View>
          <View style={styles.menuElem}>
            <Bedroom />
          </View>
        </View>
        <View>
          <View style={styles.menuElem}>
            <Kitchen />
          </View>
        </View>
        <View>
          <View style={styles.menuElem}>
            <Livingroom />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  menuElem: {
    width: 55,
    height: 55,
    backgroundColor: '#E7E7E7',
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  }
});