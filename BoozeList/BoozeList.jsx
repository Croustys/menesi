import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ToolbarAndroidBase,
} from "react-native";
import Card from "./Cards/Card";

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this._id = Math.random() * 1236;
  }
}

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
//objItems.push({name: "SÖrike", price: "ezeröt", _id: "12321312312213"})
//TODO: egyelőre csöves a megoldas az item hozzáadásnál
export default class BoozeList extends React.Component {
  render() {
    return (
      <View>
        {objItems.map(x => <Card item={x}/>)}
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
