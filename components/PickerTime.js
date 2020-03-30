import React, { Component } from 'react'
import { StyleSheet, View, Picker, Text, Platform } from 'react-native'
import moment from "moment";

import * as theme from '../theme';

export default class PickerTime extends Component {
    state = {
        timeBetween: [],
    };

    componentDidMount() {
        const end = moment("2359", "hhmm");

        let start = moment("0000", "hhmm"),
            timeBetween = [];
        while (start <= end) {
            timeBetween.push(start.format("HH:mm"));
            start = start.add(15, 'minutes')
        }
        this.setState({ timeBetween: timeBetween })
    }

    render() {
        return (
            <View style={styles.pickerTime}>
                <View style={styles.caption}>
                    <Text style={styles.formTitle}>Schedule</Text>
                </View>
                <View style={styles.pickerBlock}>
                    <View style={styles.pickerLeft}>
                        <Text style={styles.pickerTitle}>From</Text>
                        <Picker
                            selectedValue={this.props.start}
                            style={{ height: 50, width: 120, marginTop: 10 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }
                            itemStyle={styles.pickerItem}
                        >
                            {this.state.timeBetween.map((elem, id) =>
                                <Picker.Item key={id} label={elem} value={elem} />
                            )}
                        </Picker>
                    </View>
                    <View style={styles.pickerRight}>
                        <Text style={styles.pickerTitle}>To</Text>
                        <Picker
                            selectedValue={this.props.end}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }
                            itemStyle={styles.pickerItem}
                            mode="dropdown"
                        >
                            {this.state.timeBetween.map((elem, id) =>
                                <Picker.Item key={id} label={elem} value={elem} />
                            )}
                        </Picker>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerTime: {
        flex:1
    },
    picker: {
        marginTop: Platform.OS === 'ios' ? 10 : 20,
        height: 30,
        width: 120
    },
    pickerItem: {
        fontSize: 16,
        padding: 20
    },
    caption: {
        paddingTop: 10
    },
    formTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#434141',
        paddingBottom: 30
    },
    pickerTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#c2c1c1',
    },
    pickerBlock: {
        flexDirection: 'row',
    },
    pickerLeft: {
        flex: 1
    },
    pickerRight: {
        flex: 1
    }
});