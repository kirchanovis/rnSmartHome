import React, { Component } from 'react'
import { Image } from 'react-native';

export default class MenuIcon extends Component {
  render() {
    return (
      <Image source={require('./../../assets/room/menu.png')} />
    );
  }
}