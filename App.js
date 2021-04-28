import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { color } from 'react-native-reanimated';
import ScanScreen from'./screens/ScanScreen.js';
export default class App extends React.Component {
  render(){
  return (

    <View style={styles.container}>
      <TouchableOpacity
      onPress={this.getCameraPermissions}
      style={styles.scanButton}
      title="Scan Bar Code">
        <Text style={styles.buttonText}>Scan Bar Code</Text>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    height:50,
    width: 120,
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'Arial Rounded MT Bold'
  },
});
