import * as React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Meeting1 from './Meeting1.js';
import Meeting2 from './Meeting2.js';
import Meeting3 from './Meeting3.js';
import New1 from './New1.js';
import Meeting4 from './Meeting4.js';
import ProfileScreen from './ProfileScreen.js';


function MyMeetings({ navigation }) {
  const items = [
    {
      id: 1,
      title: 'Meeting 1',
      about: {
        description: ['This meeting is about anxiety. You can talk to express your feelings, you will get a lot of guidance and you will learn many new things from professionals.'],
      },
    },
    {
      id: 2,
      title: 'Meeting 2',
      about: {
        description: ['From this meeting you can get general information and learn new things about mental health.'],
      },
    },
    {
      id: 3,
      title: 'Meeting 3',
      about: {
        description: ['This meeting talks about bipolarity. Join in and learn new things.'],
      },
    },
    {
      id: 4,
      title: 'Meeting 4',
      about: {
        description: ['Are you depressed? Join this meeting to learn how to take care of your mental health.'],
      },
    },
  ];

  const renderItem = ({ item }) => (
    // todo 4: add item data to detail screen
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>Description: {item.about.description.join(', ')}</Text>
      <Button
        title="Go to this meeting."
        // todo 2: navigate to detail page
        onPress={() => navigation.navigate('Meeting ID', item)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

// creating stack navigator
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="My meetings" component={MyMeetings} />
      <Stack.Screen name="Meeting 2" component={Meeting2} />
      <Stack.Screen name="Meeting ID" component={Meeting1} />
      <Stack.Screen name="Meeting 3" component={Meeting3} />
      <Stack.Screen name="Meeting 1" component={New1} />
      <Stack.Screen name="Meeting 4" component={Meeting4} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />



    </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    //backgroundColor:'blue'
  },
  item: {
    backgroundColor: 'skyblue',
    borderRadius: 32,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  
  },
  title: {
    fontSize: 32,
    color:'yellow',
    alignSelf:'center',
    fontFamily:'Georgia'
  }
});

