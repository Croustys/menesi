import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import BoozeList from './BoozeList/BoozeList'

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textH1}>Ménesi Produkciós Iroda</Text>
        <Text style={styles.calc}>Pénz kalkulátor</Text>
        <BoozeList />
      </View>
      <View></View>
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
