import React from "react";
import "react-native-gesture-handler";
import style from "../BoozeList/Styles/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Button } from "react-native";

import BoozeList from "../BoozeList/BoozeList";
import AddBooze from "../BoozeList/AddBooze/AddBooze";

const Stack = createStackNavigator();

export default class List extends React.Component {
  render() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Individual" component={BoozeList} />
          <Stack.Screen name="Home" component={AddBooze} />
        </Stack.Navigator>
    );
  }
}
