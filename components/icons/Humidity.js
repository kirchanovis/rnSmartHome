import React, { Component } from 'react'
import { Image } from 'react-native';

export default class Humidity extends Component {
  state = { 
    img: 'data:image/png;base64,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',
  }

  render() {
    const { img } = this.state;

    return (
      <Image
      style={{width: 23, height: 22}}
      source={{uri: img}}
      />
    );
  }
}