import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import styles from "../Styles/styles";
import { Input } from "react-native-elements";

export default class AddBooze extends Component {
  state = {
    name: "",
    price: 0,
  };
  handleClick() {
    const { name, price } = this.state;
    this.props.navigation.navigate("Booze Picker", {
      itemName: name,
      itemPrice: price,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textH1}>Name</Text>
        <Input
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="Name"
          style={styles.addBoozeFC}
        />
        <Text style={styles.textH1}>Price</Text>
        <Input
          keyboardType="numeric"
          onChange={(e) => this.setState({ price: parseInt(e.target.value) })}
          placeholder="Price"
          style={styles.addBoozeFC}
        />
        <Button title="Save" name="Save" onPress={() => this.handleClick()} />
      </View>
    );
  }
}
