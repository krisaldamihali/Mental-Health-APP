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
  TextInput,
  ScrollView
} from 'react-native';

import DATA from '../../assets/Part2/DATA.json';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Learn_page({navigation, route}) {
  let item = route.params.item;
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Title: {item["title"]}
        </Text>
      </View>
      <View style={styles.container}>
        <Image style={styles.logo}
        source={{ uri: item["photo"]}}
        />
      </View>
      
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        {item["text"]}
        </Text>
      </View>
      <Separator />
      </ScrollView>
    </View>
    
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'justify',
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
