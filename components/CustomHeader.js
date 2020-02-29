import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Avatar from './Avatar'

import * as theme from '../theme';
import MenuIcon from './icons/MenuIcon'

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.blockCenter}>
            <Avatar />
          </View>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.leftBlock}>
            <View style={styles.iconMenu}>
              <MenuIcon />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eee',
    flexDirection: 'row'
  },
  headerLeft:{
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'column'
  },
  headerRight: {
    flex: 2,
    backgroundColor: '#F9F9F9',
    flexDirection: 'row-reverse',
  },
  blockCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftBlock:{
    paddingTop: 15,
    paddingRight: 15
  },
  iconMenu:{
    width: 45,
    height: 45,
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  }
});