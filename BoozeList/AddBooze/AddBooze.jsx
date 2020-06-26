import React, { Component } from "react";
import { Text, View, Button, TextInput } from "react-native";
import styles from "../Styles/styles";

export default class AddBooze extends Component {
  state = {
    name: "",
    price: 0,
  };
  handleClick() {
    const { name, price } = this.state;

    const parsedPrice = parseInt(price);

    this.props.navigation.navigate("Booze Picker", {
      itemName: name,
      itemPrice: parsedPrice,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textH1}>Name</Text>
        <TextInput
          style={styles.tInput}
          placeholder="Name"
          onChangeText={(Text) => this.setState({ name: Text })}
        />
        <Text style={styles.textH1}>Price</Text>
        <TextInput
          style={styles.tInput}
          keyboardType={"numeric"}
          placeholder="Price"
          onChangeText={(num) => this.setState({ price: num })}
        />
        <Button title="Save" name="Save" onPress={() => this.handleClick()} />
      </View>
    );
  }
}
