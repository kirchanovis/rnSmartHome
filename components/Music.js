import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as theme from './../theme';

class Music extends Component {

    render() {
        return (
            <View style={styles.music}>
                <Text>Music</Text>
            </View>
        )
    }
}

export default Music;

const styles = StyleSheet.create({
    music: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 0,
        borderRadius: 15,
        borderColor: '#eee', 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.01,
        shadowRadius: 6.65,
        elevation: 2
    }
})