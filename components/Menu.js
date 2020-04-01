import React, { useEffect, useContext, useRef } from 'react'
import KitchenIcon from './icons/KitchenIcon'
import BathroomIcon from './icons/BathroomIcon'
import BedroomIcon from './icons/BedroomIcon'
import LivingroomIcon from './icons/LivingroomIcon'
import { Context } from './../context'
import { getMenu } from './../actions/menu';
import { getDashboard } from './../actions/dashboard';
import { Dimensions, StyleSheet, View, TouchableWithoutFeedback, Animated, Easing, Platform } from 'react-native'

// import * as theme from '../theme';

const windowWidth = Dimensions.get('window').width;

function Menu(props) {
  const { state, dispatch } = useContext(Context),
    scale = useRef(new Animated.Value(1)).current;
  
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

  useEffect(() => {
    Animated.spring(scale,{
      toValue: 1.3,
      duration: 30,
      Easing: Easing
    }).start()
  }, [props.active])

  function pressOutScale(id) {
    const val = Platform.OS === 'ios' ? 0.9 : 1.2;

    Animated.timing(scale,{
      toValue: val,
      duration: 30,
      Easing: Easing
    }).start(()=> {
      getDashboard(dispatch, id)
    })
  }

  return (
    <View style={styles.menu}>
      {
        state.menu.data.map( item => 
          <View key={item.key}>
            <TouchableWithoutFeedback
              onPress={() => { pressOutScale(item.key) }}
            >
              <Animated.View style={StyleSheet.flatten([
                styles.menuElem,
                props.active === item.name && styles.menuElemActive,
                props.active === item.name && 
                  {
                    transform: [
                      {
                        scale: scale
                      }
                    ]
                  }
              ])}>
                <Icons name={item.name} active={props.active === item.name} />
              </Animated.View>
            </TouchableWithoutFeedback>
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
    width: windowWidth / 8,
    height: windowWidth / 8,
    backgroundColor: '#E7E7E7',
    borderRadius: windowWidth / 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowWidth / 28,
    marginBottom: windowWidth / 28
  },
  menuElemActive: {
    backgroundColor: '#ffc98f',
    shadowColor: "#ffc98f",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.7 : 0.2,
    shadowRadius: 4.65,
    elevation: 2

  }
});