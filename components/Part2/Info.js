import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Button,
  ScrollView
} from 'react-native';

import DATA from '../../assets/Part2/DATA.json';


export default function Info({ navigation, route }) {
  //console.log(DATA)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {DATA[route.params.id][0]["title"]}
      </Text>
      <ScrollView>
      <Image style={styles.logo}
        source={{ uri: DATA[route.params.id][0]["photo"]}}
      />
      
      <Text style={styles.paragraph}>
        {DATA[route.params.id][0]["text"]}
      </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
    textAlign: 'left',
  },
  logo: {
    //flex: 1,
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },
});
