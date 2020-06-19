import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'


export default class AddBooze extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title="hehe" name="HEHE" onPress={() => this.props.navigation.navigate('List')}/>
            </View>
        )
    }
}
