import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "../BoozeList/Styles/styles";

import BoozeList from "../BoozeList/BoozeList";
import AddBooze from "../BoozeList/AddBooze/AddBooze";

const Stack = createStackNavigator();

export default class List extends React.Component {
  render() {
    return (
        <Stack.Navigator>
          <Stack.Screen style={styles.container} name="Booze Picker" component={BoozeList} initialParams={{ itemName: "ASD", itemPrice: 123 }} />
          <Stack.Screen style={styles.container} name="Add Booze" component={AddBooze} />
        </Stack.Navigator>
    );  
  }
}
