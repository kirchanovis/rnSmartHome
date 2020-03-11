import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'


import * as theme from '../theme';
import Bathroom from './icons/Bathroom'
import Bedroom from './icons/Bedroom'
import Kitchen from './icons/Kitchen'
import Livingroom from './icons/Livingroom'

export default class Menu extends Component {
  state = { isActive: false };
  render() {
    return (
      <View style={styles.menu}>
        <View>
          <TouchableHighlight 
            onPress={() => {
              this.setState({ isActive: true })
            }} 
            underlayColor="#eee"
          >
            <View 
              style={this.state.isActive ? styles.menuElemActive : styles.menuElem}
            >
              <Bathroom />
            </View>
          </TouchableHighlight>
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
  },
  menuElemActive: {
    width: 75,
    height: 75,
    backgroundColor: '#ffc98f',
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  }
});