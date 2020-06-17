import React, { useEffect, useState } from "react";
import { CheckBox } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ToolbarAndroidBase,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  textH1: {
    color: '#fff',
    fontWeight: "bold",
    marginTop: '40px',
    textAlign: 'center',
    fontFamily: 'sans-serif'
  }
});

export default class Card extends React.Component {
  state = {
    check: false,
    price: 0,
  };
  handleChange() {
    this.setState({ check: !this.state.check });
    
    const { price, check } = this.state;
    this.props.updateData(price, !check);
  }
  componentDidMount() {
    this.setState({ price: this.props.price });
  }
  render() {
    return (
      <View>
        <CheckBox
          title={this.props.name}
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
          checked={this.state.check}
          onPress={() => this.handleChange()}
          onLongPress={() => console.log('HÁTE BRÉTÚRÓ')}
        />
      </View>
    );
  }
}
