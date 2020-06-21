import React from "react";
import { Card, objItems, Item, TotalPrice } from "./CompExports/index";
import { View, Button } from "react-native";
import styles from "./Styles/styles";

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

    if (Array.isArray(checkedList) && checkedList.length) {
      const totalAmount = checkedList.reduce((acc, val) => acc + val);
      this.setState({ total: totalAmount });
    } else {
      this.setState({ total: 0 });
    }
  }
  handleButtonClick() {
    this.props.navigation.navigate("Add Booze");
  }
  handleRefresh() {
    const { itemName, itemPrice } = this.props.route.params;
    const newItem = new Item(itemName, itemPrice);

    
    objItems.push(newItem)
    this.updateData(parseInt(itemPrice), false)
  }
  render() {
    return (
      <View style={styles.boozeListStyle}>
        {objItems.map((x) => (
          <Card
            key={x._id}
            price={x.price}
            name={x.name}
            updateData={(val, isChecked) => this.updateData(val, isChecked)}
          />
        ))}
        <TotalPrice value={this.state.total} />
        <Button
          styles={styles.buttonMargin}
          title="Add Booze"
          onPress={() => this.handleButtonClick()}
        />
        <Button
          styles={styles.buttonMargin}
          title="RefreshList"
          onPress={() => this.handleRefresh()}
        />
      </View>
    );
  }
}
