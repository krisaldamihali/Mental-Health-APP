import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function SignUp({ route, navigation }) {
  const handlePress = () => {
    navigation.pop();
  };
  const [hungryText, setHungryText] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.top_text}>
        Hi! And welcome to Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. A description of the app --------------------
      </Text>

      <Text style={styles.bottom_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. First start by
        chosing one of the 4 options below:
      </Text>

      <View style={styles.buttons_view}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.button_text}>Student</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Parent</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons_view}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Faculty</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Proffessional</Text>
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
    paddingTop: 250,
    alignSelf: 'center',
  },

  top_text: {
    fontSize: 20,
    color: 'black',
    padding: 1,
  },

  buttons_view: {
    backgroundColor: 'skyblue',
    width: 150,
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-betwen',
  },
});
