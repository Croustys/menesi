import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ToolbarAndroidBase,
} from "react-native";
import Card from "./Cards/Card";
import Item from "./Item";
import TotalPrice from "./Total Price/TotalPrice";

const vodka = new Item("Vodka", 3300);
const IPA = new Item("IPA", 280);
const LOWY = new Item("Meggyes IPA", 400);
const MEGGYES = new Item("Löwy", 180);
const sprite = new Item("Sprite", 300);

const items = [vodka, IPA, LOWY, MEGGYES, sprite];
const objItems = items.map((piece) => {
  const name = piece.name;
  const price = piece.price;
  const _id = piece._id;
  return { name, price, _id };
});

//objItems.push({name: "Sörike", price: 350})
//TODO: egyelőre csöves a megoldas az item hozzáadásnál

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
    }else this.setState({total: 0})
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
