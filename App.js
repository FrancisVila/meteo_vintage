import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeteoMini from './components/MeteoMini';


export default function App() {
  return (
    <View style={styles.container}>
	<MeteoMini />
      <Text>Open up App.js to start working on your app! nn</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
