import React from "react";
import { Card, objItems, TotalPrice } from "./CompExports/index";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ToolbarAndroidBase,
} from "react-native";

//TODO: add & remove button a listhez

export default class BoozeList extends React.Component {
  state = {
    checkedList: [],
    total: 0,
  };
  updateData(val, isChecked) {
    const { checkedList } = this.state;
    if (isChecked) {
      checkedList.push(val);
    } else {
      const index = checkedList.findIndex((indexOf) => indexOf == val);
      checkedList.splice(index, 1);
    }

    this.renderTotalValue();
  }
  renderTotalValue() {
    const { checkedList } = this.state;

    if (Array.isArray(checkedList) && checkedList.length) {
      const totalAmount = checkedList.reduce((acc, val) => acc + val);
      this.setState({ total: totalAmount });
    } else this.setState({ total: 0 });
  }
  render() {
    return (
      <View>
        {objItems.map((x) => (
          <Card
            key={x._id}
            id={x._id}
            price={x.price}
            item={x}
            name={x.name}
            updateData={(val, isChecked) => this.updateData(val, isChecked)}
          />
        ))}
        <TotalPrice value={this.state.total} />
      </View>
    );
  }
}
