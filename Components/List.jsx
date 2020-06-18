import React from "react";
import { Text, View, Button } from "react-native";
import style from "../BoozeList/Styles/styles";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BoozeList from "../BoozeList/BoozeList";

const Stack = createStackNavigator();

export default class List extends React.Component {
  render() {
    return (
      <View>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Anyad" component={BoozeList} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
