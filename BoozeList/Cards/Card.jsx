import React, { useEffect, useState } from "react";
import { CheckBox } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ToolbarAndroidBase,
} from "react-native";

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
  },
  multi: {
    marginTop: "5vh",
  },
});

export default function Card({ item }) {
  const [check, setCheck] = useState(false);

  function ChangeState() {
    setCheck(!check);
  }
  return (
    <View>
      <CheckBox
        title={item.name}
        iconRight
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="add"
        checkedColor="red"
        checked={check}
        id={item._id}
        onPress={ChangeState}
      />
    </View>
  );
}


//{ objItems.map(item => <Card item={item} /> }