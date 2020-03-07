import React, { Component } from 'react'
import { Image } from 'react-native';

export default class Kitchen extends Component {
  render() {
    return (
      <Image source={require('./../../assets/room/kitchen.png')} />
    );
  }
}