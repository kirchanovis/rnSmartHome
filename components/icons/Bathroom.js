import React, { Component } from 'react'
import { Image } from 'react-native';

export default class Bathroom extends Component {
  render() {
    return (
      <Image source={require('./../../assets/room/bathroom.png')} />
    );
  }
}