import * as React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Button,
  TextInput
} from 'react-native';

import DATA from '../../assets/Part2/DATA.json';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Chats({ navigation, route }) {
  const Item = ({item}) => (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {item["name"]}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>
        {item["description"]}
        </Text>
      </View>
      <View style={styles.container}>
        <Image style={styles.logo}
        source={{ uri: item["photo"]}}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="chose"
          onPress={() => navigation.navigate("Chat", {"name": item["name"]})}
        />
      </View>
      <Separator />
    </View>
    
  );
  
  const renderItem = ({ item }) => (
    <Item item={item} />
  );


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA["people"]}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    
  },
  title: {
    margin: 30,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    //flex: 1,
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
