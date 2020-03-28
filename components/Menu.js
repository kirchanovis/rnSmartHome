import React, { useEffect, useContext, useState } from 'react'
import KitchenIcon from './icons/KitchenIcon'
import BathroomIcon from './icons/BathroomIcon'
import BedroomIcon from './icons/BedroomIcon'
import LivingroomIcon from './icons/LivingroomIcon'
import { Context } from './../context'
import { getMenu } from './../actions/menu';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native'

import * as theme from '../theme';

function Menu(props) {
  const { state, dispatch } = useContext(Context);
  
  function Icons(props) {
    const components = {
      kitchen: KitchenIcon,
      livingroom: LivingroomIcon,
      bathroom: BathroomIcon,
      bedroom: BedroomIcon,
    }
    const Icon = components[props.name];
    return <Icon {...props} />;
  }

  useEffect(() => {
    getMenu(dispatch)
  }, [])

  return (
    <View style={styles.menu}>
      {
        state.menu.data.map( item => 
          <View key={item.key}>
            <TouchableHighlight
              onPress={() => { props.onPressFirst(item.screen) }}
              underlayColor="#eee"
            >
              <View style={StyleSheet.flatten([styles.menuElem, props.active === item.name && styles.menuElemActive])}>
                <Icons name={item.name} active={props.active === item.name} />
              </View>
            </TouchableHighlight>
          </View>
        )
      }
    </View>
  );
}

export default Menu;

/*export default class Menu extends Component {
  state = {
    isActive: false,
    fadeValue: new Animated.Value(1),
    fadeColor: new Animated.Value(0)
  };

  render() {
    const {
      onPressFirst,
      active
    } = this.props;

    return (
      <View style={styles.menu}>
        <View>
          <TouchableHighlight
            onPress={() => { onPressFirst('Kitchen') }}
            underlayColor="#eee"
          >
            <View style={StyleSheet.flatten([styles.menuEle, active === 'kitchen' && styles.menuElemActive])}>
              <KitchenIcon active={active === 'kitchen'} />
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => { onPressFirst('Livingroom') }}
            underlayColor="#eee"
          >
            <View style={StyleSheet.flatten([styles.menuElem, active === 'livingroom' && styles.menuElemActive])}>
              <LivingroomIcon active={active === 'livingroom'} />
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => onPressFirst('Bedroom')}
            underlayColor="#eee"
          >
            <View style={StyleSheet.flatten([styles.menuElem, active === 'bedroom' && styles.menuElemActive])}>
              <BedroomIcon active={active === 'bedroom'} />
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => onPressFirst('Bathroom')}
            underlayColor="#eee"
          >
            <View
              style={StyleSheet.flatten([styles.menuElem, active === 'bathroom' && styles.menuElemActive])}
            >
              <BathroomIcon active={active === 'bathroom'} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}*/

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