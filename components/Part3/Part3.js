import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import FirstScreen from './FirstScreen.js'
import SignUp from './SignUp.js'
import Settings from './Settings.js'

const Stack = createStackNavigator();

export default function Part3() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: 'Settings' }}
      />
      <Stack.Screen 
        name="FirstScreen" 
        component={FirstScreen} 
        options={{ headerTitle: 'Settings' }}
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
      />
    </Stack.Navigator>
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
    padding: 10,
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
