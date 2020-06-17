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

//objItems.push({name: "Sörike", price: "ezeröt", _id: "12321312312213"})
//TODO: egyelőre csöves a megoldas az item hozzáadásnál

export default class BoozeList extends React.Component {
  state = {
    checkedList: [],
  };
  updateData(val, isChecked) {
    const { checkedList } = this.state;
    if (isChecked) {
      checkedList.push(val);
    } else {
      const index = checkedList.findIndex(indexOf => indexOf == val);
      checkedList.splice(index, 1);
    }

    //console.log(checkedList);
    this.renderTotalValue();
  }
  renderTotalValue() {
    const total = this.state.checkedList.reduce((acc, val) => acc + val);
    console.log(total);
  }
  render() {
    return (
      <View>
        {objItems.map((x) => (
          <Card
            key={x._id}
            id={x._id}
            item={x}
            name={x.name}
            updateData={(val, isChecked) => this.updateData(val, isChecked)}
          />
        ))}
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
    marginTop: "5vh",
    fontSize: "1.55em",
    textAlign: "center",
  },
});
