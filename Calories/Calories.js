import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, TextInput} from 'react-native';
import DailyCalories from './DailyCalories.js';
import React, { useState } from 'react';
import styles from '../commonStyles.js'
import CalList from './CalList.js'
import BackButton from '../BackButton.js';
import {getCalories, saveCalories, addCalories, updateCalories, deleteAllData, getDescriptions} from './CaloriesData.js';

function Calories({navigation}){
  const [addedVal, setAddedVal] = useState(0);
  const [caloriesList, setCaloriesList] = useState([]);
  const [description, setDescription] = useState('');
  const [descriptionList, setDescriptionList] = useState([]);
  async function retrieveCalories(){
    try{
      const calories = await getCalories();
      const descriptions = await getDescriptions();
      setCaloriesList(calories)
      setDescriptionList(descriptions)
    } catch (e){
      console.error('Error retrieving calories: ', error);
    }
  }
  retrieveCalories()
  function iterateCalories(calories){
    let total = 0;
    calories.forEach(sum);
    function sum(item){
      total += item;
    }
    return total;
  }
    return(
      <View style={styles.container}>
        <BackButton navigation={navigation}></BackButton>
        <ScrollView style={styles.container}>
          <DailyCalories calories={iterateCalories(caloriesList)} calorieGoal={1800} ></DailyCalories>
          <CalList listOfCalories={caloriesList} listOfDescriptions={descriptionList}></CalList>
          <TextInput style={styles.inputBox}
              keyboardType={'numeric'}
              placeholder='Insert calories'
              onChangeText={value => handleChange(value,setAddedVal)}
          />
          <TextInput style={styles.inputBox}
              placeholder='Insert Description'
              onChangeText={text => setDescription(text)}
          />
          <TouchableOpacity style={styles.bigButton} onPress={() => 
            handleAdd(addedVal, description)}>
            <Text style={styles.bigButtonText}>Add</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.bigButton} onPress={() => 
            deleteAllData()}>
            <Text style={styles.bigButtonText}>Delete All</Text>
          </TouchableOpacity>
      </ScrollView>
      </View>
    )
}

async function handleAdd(addedVal,description){
  console.log("Descrizione:",description)
  await addCalories(addedVal, description)
}
function handleChange(string,setAddedVal){
    let num = parseInt(string)
    if(num >0){
        setAddedVal(num)
    }
}
export default Calories