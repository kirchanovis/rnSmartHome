import React, { useContext } from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import * as theme from './../theme';
import Menu from './../components/Menu';
import CustomHeader from './../components/CustomHeader'
import Greeting from './../components/Greeting'
import Humidity from './../components/icons/Humidity'
import Temperature from './../components/icons/Temperature'

import { Context } from './../context'

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
                                            <Temperature />
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
                                            <Humidity />
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
        marginTop: 25,
        marginLeft: 20,
        marginBottom: 40,
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
    wheather: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        width: '100%',
        marginBottom: 20
    },
    weatherBlock: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 15,
        borderColor: '#eee',
        borderWidth: 1,
        flexDirection: 'row'
    },
    weatherContent: {
        marginTop: 20,
        marginBottom: 20,
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
        flex: 2
    },
    wContentCelc: {
        flexDirection: 'row',
        color: '#434141',
        paddingTop: 10
    },
    wContentNum: {
        fontSize: 28,
        color: '#434141'
    },
    wContentTitle: {
        fontSize: 14,
        paddingTop: 2,
        paddingLeft: 2
    },
    wContentText: {
        paddingTop: 10,
        color: '#a1a0a0'
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
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    blockList: {
        flex: 2,
        flexDirection: 'column'
    },
    listElem: {
        flex: 1,
        flexDirection: 'row',
        color: '#d1cfcf',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 25,

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