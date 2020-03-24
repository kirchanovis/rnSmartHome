import React, { Component } from 'react'
import { Image } from 'react-native';

export default class MenuIcon extends Component {
  render() {
    return (
      <Image
      style={{width: 28, height: 23}}
      source={{uri: 'data:image/png;base64,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'}}
      />
    );
  }
}