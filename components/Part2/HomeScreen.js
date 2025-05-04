import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'headline',
    title: 'Youth mental health',
  },
  {
    id: 'article',
    title: 'Why mental health matters',
  },
  {
    id: 'entertainment',
    title: 'Quotes & Entertainment',
  },
];

const Separator = () => <View style={styles.separator} />;

export default function HomeScreen({ navigation, route }) {
  const Item = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{item.title}</Text>

      <Button
        style={styles.singleButton}
        title="More"
        // todo 2: navigate to detail page
        onPress={() => navigation.navigate('Info', { id: item.id })}
      />
      <Separator />
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Chats')}>
          <Image
            style={{ height: 50, width: 50 }}
            source={require('../../assets/Part2/chat_button.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Learn')}>
          <Image
            style={{ height: 50, width: 50 }}
            source={require('../../assets/Part2/learn_button.jpg')}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    padding: 20,
  },
  paragraph: {
    margin: 24,
    marginTop: 10,

    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    height: 50,
    width: 400,
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singleButton: {
    padding: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
