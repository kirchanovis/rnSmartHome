import React, { useEffect, useContext } from 'react'
import KitchenIcon from './icons/KitchenIcon'
import BathroomIcon from './icons/BathroomIcon'
import BedroomIcon from './icons/BedroomIcon'
import LivingroomIcon from './icons/LivingroomIcon'
import { Context } from './../context'
import { getMenu } from './../actions/menu';
import { getDashboard } from './../actions/dashboard';
import { StyleSheet, View, TouchableHighlight } from 'react-native'

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
    getDashboard(dispatch, 1)
  }, [])

  function updateDashboard(id) {
    getDashboard(dispatch, id)
  }

  return (
    <View style={styles.menu}>
      {
        state.menu.data.map( item => 
          <View key={item.key}>
            <TouchableHighlight
              onPress={() => { updateDashboard(item.key) }}
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