import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ToolbarAndroidBase,
} from "react-native";

export default class TotalPrice extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textH1}>{this.props.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  textH1: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "40px",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
});
