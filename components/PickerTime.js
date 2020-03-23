import React, { Component } from 'react'
import { StyleSheet, View, Picker, Text } from 'react-native'
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
            start=start.add(15, 'minutes')
        }
        this.setState({timeBetween: timeBetween})
    }

    render() {
        return (
            <View style={styles.pickerTime}>
                <Text>Current Date: {this.props.start}</Text>
                
                <Picker
                    selectedValue={this.props.start}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                }>
                    {this.state.timeBetween.map( (elem, id) => 
                        <Picker.Item key={id} label={elem} value={elem}/>
                    )}
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerTime: {

    }
});