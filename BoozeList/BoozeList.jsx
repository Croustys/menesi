import React from "react";
import { Card, objItems, Item, TotalPrice } from "./CompExports/index";
import { View,Button, AsyncStorage } from "react-native";

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

    if (Array.isArray(checkedList) && checkedList.length) {
      const totalAmount = checkedList.reduce((acc, val) => acc + val);
      this.setState({ total: totalAmount });
    } else {
      this.setState({ total: 0 });
    }
  }

  componentDidMount = async () => {
    try {
      for (const item of objItems) {
        await AsyncStorage.setItem(item._id, [item.name, item.price]);
      }
    } catch (e) {
      console.log(e);
    }

    try {
      for (const item of objItems) {
        const name = await AsyncStorage.getItem(item._id);
        if (name !== null) {
          console.log(name);
        }
      }
    } catch (error) {
      console.log("ERR: " + error);
    }
  };
  async handleButtonpress() {
    try{
      await AsyncStorage.setItem('newItem', ['VODKASPRITE', 450])
    }catch(e){
      console.log(`Err: ${e}`)
    }

    try{
      const newItem = await AsyncStorage.getItem('newItem')
      
      if(newItem !== null) {
        objItems.push({name: newItem[0], price: newItem[1], _id: 123})
        this.state.checkedList.push(newItem)
      }
    }
    catch(e) {
      console.log(`Error: ${e}`)
    }
  }

  render() {
    return (
      <View>
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
          onPress={this.handleButtonpress}
          title="KATT"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
