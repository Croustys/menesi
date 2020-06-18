import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './Components/List'

export default function App() {

  return (
    <View style={styles.container}>
        <Text style={styles.textH1}>Ménesi Produkciós Iroda</Text>
        <Text style={styles.calc}>Pénz kalkulátor</Text>
        <List />
        <Text style={styles.calc}>HOL VAN A LIST</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  textH1: {
    color: '#fff',
    fontWeight: "bold",
    marginTop: '20%',
    textAlign: 'center',
    fontFamily: 'sans-serif'
  },
  calc: {
    color: '#fff',
    fontWeight: "bold",
    marginTop: '20%',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginBottom: '5%'
  }
});
