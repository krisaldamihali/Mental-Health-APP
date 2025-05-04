import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function Settings({navigation, route}){
  return (
    <View style={styles.container}>
      <View style={styles.settings_container}>
        <Text style={styles.settings_text}>⚙️  Optimization</Text>

        <Text style={styles.settings_text}>🌐  Language</Text>

        <Text style={styles.settings_text}>🔔  Notifications</Text>

        <Text style={styles.settings_text}>👍  Give Feedback!</Text>
      </View>
      <View styles={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
          molestie nunc non blandit massa enim nec dui nunc.
        </Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
            onPress={() => navigation.navigate('FirstScreen')}>
          <Text style={styles.button_text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  tittle: {
    margin: 30,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'skyblue',
    padding: 2,
    font: 'Comfortaa',
  },

  image: {
    width: 5,
    height: 100,
    padding: 150,
    alignSelf: 'center',
  },

  text: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    textAlign: 'justify',
  },

  button: {
    backgroundColor: 'skyblue',
    width: 150,
    height: 50,
    borderRadius: 20,
    alignSelf: 'center',
    padding: 5,
  },

  button_text: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },

  bottom_text: {
    fontSize: 20,
    color: 'black',
    paddingTop: 50,
    alignSelf: 'center',
  },

  settings_text: {
    fontSize: 30,
    color: 'black',
    padding: 0,
    alignSelf: 'left',
  },

  settings_container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection: 'ltr',
  },
});