import React from "react";
import { Text, View } from "react-native";
import styles from "../Styles/styles";

export default class TotalPrice extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.textH1}>{this.props.value}</Text>
      </View>
    );
  }
}
