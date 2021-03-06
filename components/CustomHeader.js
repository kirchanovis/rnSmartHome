import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Avatar from './Avatar'

import * as theme from '../theme';
import MenuIcon from './icons/MenuIcon'


export default function CustomHeader(props) {

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
          <TouchableOpacity
            onPress={() => props.onPressDrawer()}
          >
            <MenuIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: '100%'
  },
  headerLeft:{
    flex: 1,
    flexDirection: 'column'
  },
  headerRight: {
    flex: 2,
    flexDirection: 'row-reverse',
  },
  blockCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});