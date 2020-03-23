import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Switch, Slider } from 'react-native';

import * as theme from '../theme';
import CustomHeader from './../components/CustomHeader'
import PickerTime from './../components/PickerTime'

class Settings extends Component {
  state = { 
    timeStart: '08:00',
    timeEnd: '23:00',
  };

  render() {
    return (
      <>
        <View style={styles.bg}>
          <View style={styles.bgLeft}></View>
          <View style={styles.bgRight}>
            <View style={styles.bgRightTop}>
              <Image
                style={styles.imageRoom}
                source={require('../assets/light.png')}
              />
            </View>
            <View style={styles.bgRightBottom}></View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentWrapper}>
            <View style={styles.header}>
              <CustomHeader />
            </View>
            <View style={styles.contentTop}>
              <View style={styles.title}>
                <Text style={styles.titleText} >Main</Text><Text style={styles.titleBold} > Light</Text>
              </View>
              <View style={styles.formBlock}>
                <View style={styles.formElem}>
                  <Text style={styles.formTitle}>Power</Text>
                  <Switch 
                    style={styles.formSwitch} 
                    trackColor={{false: '#d4d4d4', true: '#fec88e'}} 
                    ios_backgroundColor="#d4d4d4" value={true}
                  />
                </View>
                <View style={styles.formElem}>
                  <Text style={styles.formTitle}>Intensity</Text>
                  <Slider
                    style={styles.slider}
                    minimumTrackTintColor="#fec88e"
                  />
                </View>
              </View>
            </View>
            <View style={styles.contentBottom}>
              <PickerTime
                start={this.state.timeStart}
                end={this.state.timeEnd}
              />
            </View>
            <View style={styles.footer}>
              
            </View>
          </View>
        </View>
      </>
    )
  }
}

export default Settings;

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    borderColor: '#f9f9f9',
    flexDirection: 'row',
    zIndex: 1
  },
  bgRight: {
    flex: 2,
    flexDirection: 'column'
  },
  bgLeft: {
    flex: 1
  },
  bgRightTop: {
    flex: 1
  },
  bgRightBottom: {
    flex: 2
  },
  imageRoom: {
    width: '100%',
    height: '100%',
    padding: 20
  },
  content: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 2
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 40
  },
  header: {
    flex: 1
  },
  contentTop: {
    flex: 5,
    flexDirection: 'column'
  },
  title: {
    flexDirection: 'row',
    paddingTop: 20
  },
  titleText: {
    fontSize: 26,
    color: '#3a3434'
  },
  titleBold: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3a3434'
  },
  formBlock: {
    flex: 1,
    flexDirection: 'column',
  },
  formElem: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  formTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#434141',
    paddingBottom: 30
  },
  formSwitch: {
  },
  slider: {
    width: '50%'
  },
  contentBottom: {
    flex: 5
  },
  footer: {
    flex: 1
  }
})