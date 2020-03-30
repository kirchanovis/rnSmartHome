import React, { useContext } from 'react'
import { StyleSheet, View, Text, Image, FlatList, Dimensions } from 'react-native'
import * as theme from './../theme';
import Menu from './../components/Menu';
import CustomHeader from './../components/CustomHeader'
import Greeting from './../components/Greeting'
import HumidityIcons from './../components/icons/HumidityIcons'
import TemperatureIcons from './../components/icons/TemperatureIcons'

import { Context } from './../context'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Dashboard(props) {
    const { state } = useContext(Context),
        { openDrawer } = props.navigation,
        { data } = state.dashboard

    return (
        <>
            <View style={styles.bg}>
                <View style={styles.leftBg} />
            </View>
            <View style={styles.dashboard}>
                <View style={styles.dashboardWrapper}>
                    <View style={styles.dashboardHeader}>
                        <CustomHeader
                            onPressDrawer={() => {
                                openDrawer()
                            }}
                        />
                    </View>
                    <View style={styles.dashboardTitle}>
                        <Greeting />
                    </View>
                    <View style={styles.dashboardBody}>
                        <View style={styles.dashboardLeft}>
                            <View style={styles.blockMenu}>
                                <Menu
                                    active={data && data.value}
                                />
                            </View>
                            <View style={styles.blockList}>
                                <FlatList
                                    data={[
                                        { label: 'Overview', active: true },
                                        { label: 'Detail' }
                                    ]}
                                    renderItem={({ item }) =>
                                        <View style={styles.listElemBlock}>
                                            <Text style={StyleSheet.flatten([styles.listElem, item.active && styles.listElemActive])}>{item.label}</Text>
                                            {
                                                item.active ? (
                                                    <View style={styles.listElemRoundBlock}>
                                                        <View style={styles.listElemRound}></View>
                                                    </View>
                                                ) : (
                                                    <View style={styles.listElemRoundBlock}>
                                                        <View style={styles.listElemRoundNo}></View>
                                                    </View>
                                                )
                                            }
                                        </View>
                                    }
                                />
                            </View>
                        </View>
                        <View style={styles.dashboardRight}>
                            <View style={styles.blockRoom}>
                                <View style={styles.blockRoomAux}>
                                    <Image
                                        style={styles.imageRoom}
                                        source={data && data.image}
                                    />
                                </View>
                                <View style={styles.imageTitleBlock}>
                                    <Text style={styles.imageTitle}>
                                        {data && data.name}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.wheather}>
                                <View style={styles.weatherBlock}>
                                    <View style={styles.weatherLeft}></View>
                                    <View style={styles.weatherContent}>
                                        <View style={styles.wContentTop}>
                                            <TemperatureIcons />
                                        </View>
                                        <View style={styles.wContentBottom}>
                                            <View style={styles.wContentCelc}>
                                                <Text style={styles.wContentNum}>{data && data.temperature}</Text>
                                                <Text style={styles.wContentTitle}>°C</Text>
                                            </View>
                                            <Text style={styles.wContentText}>Temperature</Text>
                                        </View>
                                    </View>
                                    <View style={styles.weatherRight}></View>
                                </View>
                                <View style={styles.weatherBlock}>
                                    <View style={styles.weatherLeft}></View>
                                    <View style={styles.weatherContent}>
                                        <View style={styles.wContentTop}>
                                            <HumidityIcons />
                                        </View>
                                        <View style={styles.wContentBottom}>
                                            <View style={styles.wContentCelc}>
                                                <Text style={styles.wContentNum}>{data && data.humidity}</Text>
                                                <Text style={styles.wContentTitle}>%</Text>
                                            </View>
                                            <Text style={styles.wContentText}>Humidity</Text>
                                        </View>
                                    </View>
                                    <View style={styles.weatherRight}></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

export default Dashboard;

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
        borderRadius: 25
    },
    blockRoom: {
        flex: 2,
        justifyContent: 'center',
        zIndex: 2,
        marginTop: windowHeight / 32,
        marginLeft: windowWidth / 18,
        marginBottom: windowHeight / 64,
        borderRadius: windowWidth / 18,
        width: '80%',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 30,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 2
    },
    wheather: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: windowWidth / 36,
        width: '100%',
        marginBottom: windowWidth / 36
    },
    weatherBlock: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: windowWidth / 36,
        marginLeft: windowWidth / 36,
        marginRight: windowWidth / 36,
        borderRadius: windowWidth / 36,
        borderColor: '#eee',
        borderWidth: 1,
        flexDirection: 'row'
    },
    weatherContent: {
        marginTop: windowWidth / 36,
        marginBottom: windowWidth / 36,
        flex: 10,
        flexDirection: 'column'
    },
    weatherLeft: {
        flex: 2
    },
    weatherRight: {
        flex: 2
    },
    wContentTop: {
        flex: 2
    },
    wContentBottom: {
        flex: 4,
        justifyContent: 'flex-end'
    },
    wContentCelc: {
        flexDirection: 'row',
        color: '#434141',
        paddingTop: windowWidth / 24
    },
    wContentNum: {
        fontSize: 28,
        color: '#434141'
    },
    wContentTitle: {
        fontSize: 14,
        paddingTop: 3,
        paddingLeft: 2
    },
    wContentText: {
        paddingTop: 10,
        color: '#a1a0a0',
        fontSize: 12,
    },
    blockRoomAux: {
        position: 'relative',
        justifyContent: 'center',
        zIndex: 3,
        backgroundColor: 'green'
    },
    imageRoom: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        width: windowWidth / 1.5,
        height: windowHeight / 2,
        resizeMode: 'cover',
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
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    blockList: {
        flex: 3,
        flexDirection: 'column'
    },
    listElem: {
        flex: 1,
        flexDirection: 'row',
        color: '#d1cfcf',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 25,

    },
    listElemActive: {
        color: '#3a3434',
    },
    listElemRound: {
        backgroundColor: '#ffc98f',
        width: 7,
        height: 7,
        borderRadius: 7
    },
    listElemRoundNo: {
        backgroundColor: '#f5f5f5',
        width: 7,
        height: 7,
        borderRadius: 7
    },
    listElemRoundBlock: {
        flex: 1,
        alignItems: 'center',
    },
    listElemBlock: {
        flexDirection: 'column',
        transform: [{
            rotate: '270deg'
        }],
        position: 'relative',
    }
})