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
  textH1: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "5vh",
    fontSize: "1.55em",
  },
  multi: {
    marginTop: "5vh",
  },
});

export default class Card extends React.Component {
  state = {
    check: false,
    _id: 0,
  };
  handleChange() {
    this.setState({ check: !this.state.check });
    
    const { _id, check } = this.state;
    this.props.updateData(_id, !check);
  }
  componentDidMount() {
    this.setState({ _id: this.props.id });
  }
  render() {
    return (
      <View>
        <CheckBox
          title={this.props.name}
          iconRight
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
