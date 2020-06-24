import React from "react";
import { CheckBox } from "react-native-elements";
import { StyleSheet, View, AsyncStorage } from "react-native";

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
  delCard() {
    this.props.handleDelete(this.props.id)
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
          onLongPress={() => this.delCard()}
        />
      </View>
    );
  }
}
