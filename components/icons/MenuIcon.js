import React, { Component } from 'react'
import Svg, { G, Path } from 'react-native-svg';

export default class MenuIcon extends React.Component {
  render() {
    return (
      <Svg width="50%" height="50%" viewBox="0 0 512 512">
        <G>
          <G>
            <Path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
          </G>
        </G>
        <G>
          <G>
            <Path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/>
          </G>
        </G>
        <G>
          <G>
            <Path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
              C512,404.954,503.046,396,492,396z"/>
          </G>
        </G>
      </Svg>
    );
  }
}