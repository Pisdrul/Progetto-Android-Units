import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, TextInput} from 'react-native';
import DailyCalories from './DailyCalories.js';
import React, { useState } from 'react';
import styles from './commonStyles.js'
import CalList from './CalList.js'
import BackButton from './BackButton.js';
import {getCalories, saveCalories, addCalories, removeCalories, updateCalories} from './Data';

function Calories({navigation}){
  const [calories, setCalories] = useState(0);
  const [addedVal, setAddedVal] = useState(0);
  const [caloriesList, setCaloriesList] = useState([]);
    return(
      <View style={styles.container}>
        <BackButton navigation={navigation}></BackButton>
        <ScrollView style={styles.container}>
          <DailyCalories calories={calories} calorieGoal={1800} ></DailyCalories>
          <CalList list={caloriesList}></CalList>
          <TextInput style={styles.inputBox}
              keyboardType={'numeric'}
              placeholder='Insert calories'
              onChangeText={value => handleChange(value,setAddedVal)}
          />
          <TouchableOpacity style={styles.bigButton} onPress={() => 
            handleAdd(calories,addedVal,caloriesList,setCalories,setCaloriesList)}>
            <Text style={styles.bigButtonText}>Add</Text>
          </TouchableOpacity> 
      </ScrollView>
      </View>
    )
}

async function handleAdd(calories,addedVal,caloriesList, setCalories,setCaloriesList){
    await addCalories(addedVal)
    console.log(await getCalories())
}
function handleChange(string,setAddedVal){
    let num = parseInt(string)
    if(num >0){
        setAddedVal(num)
    }
}
export default Calories