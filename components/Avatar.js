import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import * as theme from '../theme';

export default function Avatar() {
  return (
    <View style={styles.avatar}>
    <Image
      style={styles.avatarImage}
      source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/10363610_1396292840681724_5288584348441541030_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=tVuXTrktSdAAX8qZ_GM&_nc_ht=scontent-frt3-1.xx&oh=36a2edf7a6c94c9191470e7385fbd0f0&oe=5EA71370'}}
    />
    <View style={styles.avatarOnline}></View>
  </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    position: 'relative',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 2,
  },
  avatarImage: {
    width: 45, 
    height: 45,
    borderRadius: 25
  },
  avatarOnline: {
    backgroundColor:'#FF5B5B',
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#fff',
    top: -2,
    right: -1
  }
});