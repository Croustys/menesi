import React from "react";
import "react-native-gesture-handler";
import styles from "../BoozeList/Styles/styles";
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
          <Stack.Screen style={styles.container} name="Booze Picker" component={BoozeList} initialParams={{ itemName: "", itemPrice: 0 }} />
          <Stack.Screen style={styles.container} name="Add Booze" component={AddBooze} />
        </Stack.Navigator>
    );  
  }
}
