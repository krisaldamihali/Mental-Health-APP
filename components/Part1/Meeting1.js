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
  ImageBackground 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Meeting1({ route, navigation }) {

  const items = [
   
    {
      id: 1,
      meeting: 'My meeting ID:',
      meetingID: 'XXX XXX XXX'
     
    },
    
  ];
  const goToMeeting = (item) => {
    if (item.id == 1) navigation.navigate('Meeting 1', item)
    else if (item.id == 2) navigation.navigate('Meeting 2', item)
    else if (item.id == 3) navigation.navigate('Meeting 3', item)
    else if (item.id == 4) navigation.navigate('Meeting 4', item)
  }

  const renderItem = ({ item }) => (
    // todo 4: add item data to detail screen
    <View style={styles.container}>
      <Text style={styles.item1}>{route.params.title}</Text>
      <Text style={styles.subtitle}>{item.meeting}</Text>
      <Text style={styles.subtitle}>{item.meetingID}</Text>
      <Image style={styles.image} source={{uri:"https://image.flaticon.com/icons/png/512/4168/4168897.png"}}/>
       
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button 
        title ="Start a new meeting."
        // todo 2: navigate to detail page
        onPress={() => goToMeeting(route.params)}
      />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#00ed7b'

  },
  item1: {
    backgroundColor: '#b5e8e8',
    borderRadius:10 ,
    padding:40,
    fontSize:40,
    alignItems: 'center',
    justifyContent:'center',
    fontFamily:'Fantasy',
    color:'blue'
    
  },
  subtitle: {
    fontStyle: 'italic',
    padding:20,
    fontSize: 30,
    alignSelf: 'center',
    justifyContent:'center',
    color:'#630738'
  },
  image: {
    height:240,
    width:240,
    aspectRatio: 1,
  },
});