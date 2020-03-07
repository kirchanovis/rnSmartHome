import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import * as theme from './../theme';
import Menu from './../components/Menu';
import CustomHeader from './../components/CustomHeader'
import Greeting from './../components/Greeting'

class Dashboard extends Component {

    render() {
        return (
            <>
                <View style={styles.bg}>
                    <View style={styles.leftBg} />
                </View>
                <View style={styles.dashboard}>
                    <View style={styles.dashboardWrapper}>
                        <View style={styles.dashboardHeader}>
                            <CustomHeader />
                        </View>
                        <View style={styles.dashboardTitle}>
                            <Greeting />
                        </View>
                        <View style={styles.dashboardBody}>
                            <View style={styles.dashboardLeft}>
                                <View style={styles.blockMenu}>
                                    <Menu />
                                </View>
                            </View>
                            <View style={styles.dashboardRight}>
                                <View style={styles.blockRoom}>
                                    <View style={styles.blockRoomAuth}>
                                        <Image
                                            style={styles.imageRoom}
                                            source={require('../assets/room.jpg')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    {/*<View style={styles.textAbsolute}>
                        
                    </View>*/}
                </View>
            </>
        )
    }
}

export default Dashboard;

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        borderColor: '#eeeeee'
    },
    leftBg: {
        width: '30%', 
        height: '100%', 
        backgroundColor: '#eee', 
        borderColor: '#f5f5f5', 
        borderWidth: 1 
    },
    dashboard: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
    dashboardWrapper: {
        flex: 1,
        flexDirection: 'column',
        padding: 40
    },
    dashboardHeader: {
        flex: 1
    },
    dashboardTitle: {
        flex: 1,
    },
    dashboardBody: {
        flex: 8,
        flexDirection: 'row',
        margin: -40,
        marginTop: 0
    },
    dashboardLeft: {
        flex: 3,
        flexDirection: 'column'
    },
    dashboardRight: {
        flex: 7,
    },
    blockRoom: {
        flex: 1,
        justifyContent: 'center',
        width: 200,
        zIndex: 2,
        overflow: 'hidden',
    },
    blockRoomAuth: {
        position: 'relative',
        justifyContent: 'center'
    },
    imageRoom: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    blockMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})