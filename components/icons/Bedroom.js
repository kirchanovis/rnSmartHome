import React, { Component } from 'react'
import { Image } from 'react-native';

export default class Bedroom extends Component {
  render() {
    return (
      <Image source={require('./../../assets/room/bedroom.png')} />
    );
  }
}