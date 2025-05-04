import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// You can import from local files
import HomeScreen from './HomeScreen.js';
import Info from './Info.js';
import Chat from './Chat.js';
import Chats from './Chats.js';
import Learn from './Learn.js';
import Learn_page from './Learn_page.js'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();


export default function App() {
  return (
     <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "Home" }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={{ headerTitle: "Chats" }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerTitle: "Personal Message" }}
        />
        <Stack.Screen
          name="Learn"
          component={Learn}
          options={{ headerTitle: "Learn" }}
        />
        <Stack.Screen
          name="Learn_page"
          component={Learn_page}
          options={{ headerTitle: "Learn" }}
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
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
