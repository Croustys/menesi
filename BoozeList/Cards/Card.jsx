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
    backgroundColor: "#000",
    alignItems: "center",
  },
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
  };
  handleChange() {}
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
          id={this.props._id}
          onPress={() => this.setState({ check: !this.state.check })}
        />
      </View>
    );
  }
}
