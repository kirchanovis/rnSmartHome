import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, Dimensions } from 'react-native'
import * as theme from './../theme';

// import PlayIcon from './icons/PlayIcon'
import NextIcon from './icons/NextIcon'
import PreviuosIcon from './icons/PreviuosIcon'
import PauseIcon from './icons/PauseIcon'

const windowWidth = Dimensions.get('window').width;

export default function Music() {

    return (
        <View style={styles.music}>
            <View style={styles.info}>
                <View style={styles.round}>
                    <View style={styles.roundSmall}></View>
                </View>
                <View style={styles.caption}>
                    <Text style={styles.sound}>Way Back Home</Text>
                    <Text style={styles.author}>Shaun</Text>
                </View>
            </View>
            <View style={styles.control}>
                <View style={styles.controlElem}>
                    <TouchableHighlight
                        onPress={() => { alert('Previuos') }}
                        underlayColor="#eee"
                    >
                        <PreviuosIcon />
                    </TouchableHighlight>
                </View>
                <View style={styles.controlElem}>
                    <TouchableHighlight
                        onPress={() => { alert('Pause') }}
                        underlayColor="#eee"
                    >
                        <PauseIcon />
                    </TouchableHighlight>
                </View>
                <View style={styles.controlElem}>
                    <TouchableHighlight
                        onPress={() => { alert('Next') }}
                        underlayColor="#eee"
                    >
                        <NextIcon />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    music: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: windowWidth / 32,
        paddingRight: windowWidth / 32,
        borderRadius: windowWidth / 32,
        borderColor: '#eee',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.01,
        shadowRadius: 6.65,
        elevation: 2,
        flexDirection: 'row',
    },
    info: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    control: {
        flex: 2,
        flexDirection: 'row',
        alignItems: "center",
    },
    controlElem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    round: {
        backgroundColor: '#ffc98f',
        flexBasis: windowWidth / 10,
        height: windowWidth / 10,
        borderRadius: windowWidth / 10,
        position: 'relative',
        zIndex: 1
    },
    roundSmall: {
        position: 'absolute',
        top: windowWidth / 40,
        left: windowWidth / 40,
        backgroundColor: '#fff',
        width: windowWidth / 20,
        height: windowWidth / 20,
        borderRadius: windowWidth / 10,
        zIndex: 2
    },
    caption: {
        flex: 2,
        paddingLeft: windowWidth / 32,
    },
    sound: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#434141',
    },
    author: {
        paddingTop: '3%',
        fontSize: 11,
        color: '#7b7a7a',
    }
})