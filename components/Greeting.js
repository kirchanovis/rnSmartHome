import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as theme from './../theme';

export default function Greeting() {

    return (
        <View style={styles.greeting}>
            <View style={styles.name}>
                <Text style={styles.hello} >Hello</Text><Text style={styles.nameText} >, Ilya</Text>
            </View>
            <View>
                <Text style={styles.question}>Good evening, what are you up to?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    greeting: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        height: '100%'
    },
    name: {
        flexDirection: 'row',
        paddingBottom: 10,
        color: '#3a3434'
    },
    hello: {
        fontSize: 26,
        color: '#3a3434'
    },
    nameText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#3a3434'
    },
    question: {
        color: '#939090'
    }
})