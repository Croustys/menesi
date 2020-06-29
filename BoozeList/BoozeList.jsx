import React from "react";
import { Card, objItems, Item, TotalPrice } from "./CompExports/index";
import { View, Button, Text } from "react-native";
import styles from "./Styles/styles";

export default class BoozeList extends React.Component {
  state = {
    checkedList: [],
    total: 0,
  };
  updateData(val, isChecked) {
    const { checkedList } = this.state;

    if (isChecked && val !== null) {
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

  handleDelete(key) {
    const index = objItems.findIndex((idOf) => idOf._id === key);

    const objectExists = objItems[index].price ? objItems[index].price : null;

    objItems.splice(index, 1);

    this.updateData(objectExists, false);
  }

  handleRefresh() {
    const { itemName, itemPrice } = this.props.route.params;

    objItems.push(new Item(itemName, itemPrice));

    this.updateData(itemPrice, false);
  }
  render() {
    return (
      <View style={styles.boozeListStyle}>
        <Text style={styles.textH1}>Ménesi Produkciós Iroda</Text>
        <Text style={styles.textH1}>Alkohol kalkulátor</Text>
        {objItems.map((x) => (
          <Card
            key={x._id}
            id={x._id}
            price={x.price}
            name={x.name}
            updateData={(val, isChecked) => this.updateData(val, isChecked)}
            handleDelete={(x) => this.handleDelete(x)}
          />
        ))}
        <TotalPrice value={this.state.total} />
        <Button
          styles={styles.btnD}
          title="Add Booze"
          onPress={() => this.handleButtonClick()}
        />
        <Button
          styles={styles.btnD}
          title="RefreshList"
          onPress={() => this.handleRefresh()}
        />
      </View>
    );
  }
}
