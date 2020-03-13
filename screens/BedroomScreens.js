import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import * as theme from './../theme';
import Menu from './../components/Menu';
import CustomHeader from './../components/CustomHeader'
import Greeting from './../components/Greeting'

class BedroomScreens extends Component {

    render() {
        const { navigate } = this.props.navigation;

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
                                    <Menu 
                                        onPressFirst={(name) => {
                                            navigate(name)
                                        }}
                                        active="bedroom"
                                    />
                                </View>
                            </View>
                            <View style={styles.dashboardRight}>
                                <View style={styles.blockRoom}>
                                    <View style={styles.blockRoomAux}>
                                        <Image
                                            style={styles.imageRoom}
                                            source={require('../assets/room/bedroom.jpg')}
                                        />
                                    </View>
                                    <View style={styles.imageTitleBlock}>
                                        <Text style={styles.imageTitle}>
                                            Bedroom
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.temperature}>

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

export default BedroomScreens;

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        borderColor: '#f9f9f9'
    },
    leftBg: {
        width: '30%', 
        height: '100%', 
        backgroundColor: '#f5f5f5', 
        borderColor: '#eeeeee', 
        borderWidth: 2
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
        flexDirection: 'column',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 2,
    },
    blockRoom: {
        flex: 2,
        justifyContent: 'center',
        zIndex: 2,
        marginLeft: 20,
        borderRadius: 20,
        width: '80%',
        overflow: 'hidden',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 30,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 2,
    },
    temperature: {
        flex: 1,
    },
    blockRoomAux: {
        position: 'relative',
        justifyContent: 'center',
        zIndex: 3,
    },
    imageRoom: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        margin: -250
    },
    imageTitleBlock: {
        zIndex: 4,
        position: 'absolute',
        bottom: '5%',
        left: '10%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.9,
        shadowRadius: 1.65,
        elevation: 2
    },
    imageTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    blockMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})