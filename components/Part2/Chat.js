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

export default function Chat({navigation, route}) {
    const [text, setText] = useState('');
    const hello ="Hello. I am " + route.params.name + " and we can talk about anything you would like!";

  return (
    <View style={{padding: 10}}>
      <Text style={{padding: 10, fontSize: 42}}>
        {route.params.name}
      </Text>
      <Text style={{padding: 10, fontSize: 20}}>
        {hello}
      </Text>
      <TextInput
        style={{height: 40}}
        placeholder="Send Message"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
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
