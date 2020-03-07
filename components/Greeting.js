import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as theme from './../theme';

class Greeting extends Component {

    render() {
        return (
            <View style={styles.greeting}>
                <View style={styles.name}>
                    <Text>Hello,</Text><Text>Anna</Text>
                </View>
                <View>
                    <Text>Good evening, what are you up to?</Text>
                </View>
            </View>
        )
    }
}

export default Greeting;

const styles = StyleSheet.create({
    greeting: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        height: '100%'
    },
    name: {
        flexDirection: 'row'
    }
})