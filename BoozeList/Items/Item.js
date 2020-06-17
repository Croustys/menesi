import React from 'react'
import { AsyncStorage } from 'react-native';
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this._id = price + 150
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

export default objItems