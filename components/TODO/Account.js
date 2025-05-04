
import { Text, View, ScrollView,StyleSheet, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';


export default class App extends Component {  
  render(){
    return (
      <View style={styles.container}>
            <View style={styles.text1}>
              <TouchableOpacity>
                  <Text style={[styles.text1]}>My account</Text> 
              </TouchableOpacity>
           </View>
            <View style={styles.container}>
              <Image style={styles.image} source={{uri:"https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"}}/>
                <Text style={[styles.text2]}>
                USER
                </Text>
                <Text style={[styles.text4]}>
                Student
                </Text>
                <Text style={[styles.text3]}>
                A 16-year-old girl, smiling, smart, sociable with everyone. Aims to help others take care of their mental health.
                </Text>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#d0a1d6'
  },
  text1: {
    padding:20,
    //backgroundColor: '#000', 
    alignItems:'center', 
    fontSize:30, 
    color: `#797ed1`, 
    fontFamily: 'Fantasy'
  },
  image: {
    width:200, 
    height:200, 
    borderRadius:100, 
    marginTop:70, 
  },
  text2: {
    fontSize:35,
    fontWeight:'bold',
    padding:10,
    fontFamily: 'Georgia',
    color: `yellow`,
  },
  text3: {
    fontSize:15,
    padding:10,
    fontFamily: 'Times New Roman',
    color:'green'
  },
  text4: {
    fontSize:25,
    padding:2,
    fontFamily: 'Fantasy',
    color:'red'
  }
});