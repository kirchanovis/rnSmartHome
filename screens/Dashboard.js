import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import * as theme from './../theme';
import Menu from './../components/Menu';
import CustomHeader from './../components/CustomHeader'

class Dashboard extends Component {
    static navigationOptions = {
        headerTitle: <CustomHeader />,
    };

    render() {
        return (
            <>
                <View style={styles.bg}>
                    <View style={{ width: '30%', height: '100%', backgroundColor: '#f5f5f5', borderColor: '#eeeeee', borderWidth: 1 }} />
                </View>
                <View style={styles.dashboard}>
                    <View style={styles.textAbsolute}>
                        <Text>
                            <Text>Hello,</Text><Text>Anna</Text>
                        </Text>
                        <Text>
                            Good evening, what are you up to?
          </Text>
                    </View>
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
        right: 0
    },
    dashboard: {
        backgroundColor: '#eee',
        flex: 1,
        flexDirection: 'row',
    },
    dashboardLeft: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#eee',
        flexDirection: 'column',
        paddingTop: 180
    },
    dashboardRight: {
        flex: 2,
        backgroundColor: '#F9F9F9',
        paddingTop: 180
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
        zIndex: 1
    },
    blockMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textAbsolute: {
        position: 'absolute',
        width: 300,
        zIndex: 3,
        paddingTop: 100,
        paddingLeft: 30
    }
})