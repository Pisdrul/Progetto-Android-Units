import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Input} from 'react-native';
import DailyCalories from './DailyCalories.js';
import React, {Component, useState} from 'react';
import styles from './commonStyles.js'

function Calories({navigation}){
  const [calories, setCalories] = useState(0);
    return(
      <View style={styles.container}>
        <DailyCalories calories={calories} calorieGoal={1800} ></DailyCalories>
        <TouchableOpacity style={styles.bigButton} onPress={() => setCalories(calories+100)}>
          <Text style={styles.bigButtonText}>Add 100</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.bigButtonText}>Go back</Text>
        </TouchableOpacity>
    </View>
    )
}
export default Calories