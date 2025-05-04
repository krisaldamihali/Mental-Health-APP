import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sign_Up_1 from './SignUp';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function First_Screen({ route, navigation }) {
  const handlePress = () => {
    navigation.navigate("SignUp")
  };

  const [hungryText, setHungryText] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Tittle</Text>

      <Text style={styles.text}>Already have an account.</Text>
      <Text style={styles.text}>Sign in!</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.bottom_text}>New?</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text} onPress={handlePress}>Sign Up</Text>
      </TouchableOpacity>
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
    padding: 1,
    alignSelf: 'center',
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
});
