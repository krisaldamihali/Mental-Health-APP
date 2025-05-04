
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Constants from 'expo-constants';
import MeetingPhotos from '../../assets/Part1/MeetingPhotos.json';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Meeting2() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          color: 'green',
          padding:30,
          textAlign: 'center',
          fontFamily:'Fantasy'
        }}>
        {' '}
        Meeting 2{' '}
      </Text>
      <FlatList
        numColumns = {3}
        data={MeetingPhotos.MeetingPhotos}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1/3, flexDirection: 'row', marginBottom: 3 }}
            onPress={() => ToastAndroid.show(item.title, ToastAndroid.SHORT)}>
            <View style={{ flex: 1/3, flexDirection: 'row' }}>
              <Image
                style={{ width: 100, height: 150 }}
                source={{ uri: item.image }}
              />
               <Text
                  style={{
                    fontSize: 30,
                    color: '#02666e',
                    marginBottom: 18,
                    textAlign: 'center',
                    position: "absolute"
                  }}>
                  User
                </Text>
            </View>
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
}

renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginBottom: 15,
      }}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E4C3',
  },
});

