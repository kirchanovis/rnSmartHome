import React, { Component } from 'react'
import { Image } from 'react-native';

export default class PlayIcon extends Component {
  state = { 
    img: 'data:image/png;base64,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'
  }

  render() {
    const { img } = this.state;

    return (
      <Image
      style={{width: 14, height: 14}}
      source={{uri: img}}
      />
    );
  }
}