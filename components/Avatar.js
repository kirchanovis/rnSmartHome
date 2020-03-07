import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import * as theme from '../theme';

export default class Avatar extends Component {
  render() {
    return (
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
        />
        <View style={styles.avatarOnline}></View>
      </View>
    );
  }
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
      height: 5,
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