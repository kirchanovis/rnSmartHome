import React, { Component } from 'react'
import { Image } from 'react-native';

export default class Bedroom extends Component {
  state = { 
    img: 'data:image/png;base64,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',
    imgActive: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAiCAYAAAApkEs2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD6SURBVHgB7ZjhDYIwEIWvxv8yQkdgA7uJcQOdwBF0BDZRJ5ANdAScAN9hm/iHpOhZCrkvuTaEI3kcvdcGat+cKXMWNBFUqDQqVBoVKs3SzwW81PXk1MaYhkYCukpMBbVx3BAbGgHejFhAqOgDUfXkOh8Vvx2qu6cxiNlCcd8i7j73SAkJFY0S6h8oPsQ6SkQQGt31vqG2/jL5eh1kTxB7wcSCHSXmGx+tEZYSMznD564+RD5jeRiQ/yuWB9O1/gQIFeV1t6M8OSHKILRBR18pQ/DBu3OGHvOkmbU9pcbyoPYkiNrTX1Ch0qhQadhH15if6PqaMsT/gFi9AJEgs++vhBTUAAAAAElFTkSuQmCC'
  }

  render() {
    const { active } = this.props,
      { img, imgActive} = this.state;

    return (
      <Image
      style={{width: active ? 42 : 24, height: active ? 33 : 19}}
      source={{uri: active ? imgActive : img}}
      />
    );
  }
}