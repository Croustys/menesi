import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ToolbarAndroidBase,
} from "react-native";
import styles from "../Styles/styles";

export default class TotalPrice extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textH1}>{this.props.value}</Text>
      </View>
    );
  }
}
