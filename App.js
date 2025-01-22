import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Input} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component, useState} from 'react';
import Titolo from './Titolo.js';
import Calories from './Calories/Calories.js';
import Water from './Water/Water.js'
import styles from './common/commonStyles.js';
import BackButton from './BackButton.js';
import { clear } from './Calories/CaloriesData.js';
const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(){
    super()
    this.state = {
      calNumber:0
    }
  }
  render(){ 
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Calories" component={Calories}/>
          <Stack.Screen name="Water" component={Water}/>
          <Stack.Screen name="Running" component={Running}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
function Home({navigation}){
  return(
    <View style={styles.container}>
      <Titolo/>
          <Buttons navigation={navigation}></Buttons>
   </View>
  )
}
function Buttons({navigation}){
  return(
    <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.bigButton} onPress={() => navigation.navigate("Calories")}>
            <Text style={styles.bigButtonText}>Calories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigButton} onPress={() => navigation.navigate("Water")}>
            <Text style={styles.bigButtonText}>Water</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigButton} onPress={() => navigation.navigate("Running")}>
            <Text style={styles.bigButtonText}>Running</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.redButton} onPress={() => clear()}>
            <Text style={styles.bigButtonText}>Delete all data</Text>
          </TouchableOpacity>
    </View>
  )
}


function Running({navigation}){ 
  return(
    <View style={styles.container}>
      <BackButton navigation={navigation}/>
   </View>
  )
}
export default App;