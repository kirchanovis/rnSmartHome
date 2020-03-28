import React, { Component } from 'react'
import { Image } from 'react-native';

export default class Temperature extends Component {
  state = { 
    img: 'data:image/png;base64,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'
  }

  render() {
    const { img } = this.state;

    return (
      <Image
      style={{width: 17, height: 21}}
      source={{uri: img}}
      />
    );
  }
}