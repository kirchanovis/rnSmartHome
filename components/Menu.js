import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Animated, TouchableWithoutFeedback } from 'react-native'

import * as theme from '../theme';
import BathroomIcon from './icons/BathroomIcon'
import BedroomIcon from './icons/BedroomIcon'
import KitchenIcon from './icons/KitchenIcon'
import LivingroomIcon from './icons/LivingroomIcon'

export default class Menu extends Component {
  state = { 
    isActive: false,
    fadeValue: new Animated.Value(1),
    fadeColor: new Animated.Value(0)
  };

  /*pressOut(active) {
    this.setState({isActive: true})
    Animated.timing(this.state.fadeColor, {
      toValue: 1,
      duration : 50
    }).start(() => {
      Animated.timing(this.state.fadeValue,{
        toValue : 1.6,
        duration : 100
      }).start(()=> {
        this.props.onPressFirst(active)
        this.pressIn()
      });
    })
  }

  pressIn() {
    this.setState({isActive: false})
    Animated.timing(this.state.fadeColor, {
      toValue: 0,
    }).start()
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
    }).start()
  }*/

  render() {
    const { 
        onPressFirst,
        active
      } = this.props;

    return (
      <View style={styles.menu}>
        <View>
            <TouchableHighlight  
              onPress={() => { onPressFirst('Kitchen')}}
              underlayColor="#eee"
            >
              <View style={StyleSheet.flatten([styles.menuElem, active === 'kitchen' && styles.menuElemActive ])}>
                <KitchenIcon active={active === 'kitchen'} />
              </View>
            </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight 
            onPress={() => { onPressFirst('Livingroom')}} 
            underlayColor="#eee"
          >
            <View style={StyleSheet.flatten([styles.menuElem, active === 'livingroom' && styles.menuElemActive ])}>
              <LivingroomIcon active={active === 'livingroom'} />
            </View>
          </TouchableHighlight>  
        </View>
        <View>
          <TouchableHighlight 
            onPress={() => onPressFirst('Bedroom')} 
            underlayColor="#eee"
          >
            <View style={StyleSheet.flatten([styles.menuElem, active === 'bedroom' && styles.menuElemActive ])}>
              <BedroomIcon active={active === 'bedroom'}  />
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight 
            onPress={() => onPressFirst('Bathroom')} 
            underlayColor="#eee"
          >
            <View 
              style={StyleSheet.flatten([styles.menuElem, active === 'bathroom' && styles.menuElemActive ])}
            >
              <BathroomIcon active={active === 'bathroom' } />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuElem: {
    width: 64,
    height: 64,
    backgroundColor: '#E7E7E7',
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25
  },
  menuElemActive: {
    transform: [{
      scale: 1.2
    }],
    backgroundColor: '#ffc98f',
    shadowColor: "#ffc98f",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 2
  }
});