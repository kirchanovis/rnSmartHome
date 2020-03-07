import React, { Component } from 'react'
import { Image } from 'react-native';

export default class Livingroom extends Component {
  render() {
    return (
      <Image source={require('./../../assets/room/livingroom.png')} />
    );
  }
}