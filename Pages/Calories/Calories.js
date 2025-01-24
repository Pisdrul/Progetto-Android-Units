import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import DailyGoal from '../../commonComponents/DailyGoal.js';
import React, { useState } from 'react';
import styles from '../../commonComponents/commonStyles.js'
import CalList from './CalList.js'
import BackButton from '../../commonComponents/BackButton.js';
import {getCalories, addCalories, deleteAllData, getDescriptions, setGoalMemory, getGoal} from './CaloriesData.js';

function Calories({navigation}){
  const [addedVal, setAddedVal] = useState(0);
  const [caloriesList, setCaloriesList] = useState([]);
  const [description, setDescription] = useState('');
  const [descriptionList, setDescriptionList] = useState([]);
  const [goal, setGoal] = useState(1800)
  const [goalChange, setGoalChange] = useState(0)
  async function retrieveCalories(){
    //Load from memory
    try{
      const calories = await getCalories();
      const descriptions = await getDescriptions();
      setCaloriesList(calories)
      setDescriptionList(descriptions)
      console.log('retrieved data for calories!')
    } catch (e){
      console.error('Error retrieving calories: ', error);
    }
  }
  async function updateGoal (){
    const goal = await getGoal()
    setGoal(goal)
  }
  React.useEffect(() => {
    //Load from memory on page arrival
    retrieveCalories();
    updateGoal();
    
  }, []);
  function iterateCalories(){
    console.log(caloriesList)
    let total = 0;
    caloriesList.forEach(sum);
    function sum(item){
      total += item;
    }
    return total;
  }
    return(
      <View style={styles.container}>
        <BackButton navigation={navigation}></BackButton>
          <DailyGoal current={iterateCalories()} goal={goal} isWater={false}></DailyGoal>
          <View style={rowStyle.rowBox}>
            <TouchableOpacity style={rowStyle.bigButton} onPress={() => 
              handleSetGoal(goalChange)}>
              <Text style={rowStyle.bigButtonText}>Change</Text>
            </TouchableOpacity> 
            <TextInput style={rowStyle.inputBox}
                keyboardType={'numeric'}
                placeholder='Change goal'
                onChangeText={value => handleChangeGoal(value,setGoalChange)}
            />          
          </View>
          <ScrollView>
            <CalList listOfCalories={caloriesList} listOfDescriptions={descriptionList} functionCal={setCaloriesList} functionDesc={setDescriptionList} retrieve ={retrieveCalories}></CalList>
          </ScrollView>
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
            deleteData()}>
            <Text style={styles.bigButtonText}>Delete All</Text>
          </TouchableOpacity>
      </View>
    )
    async function handleSetGoal(goalChange){
      console.log("Goal:",goalChange)
      await setGoalMemory(goalChange)
      updateGoal();
    }
    async function handleAdd(addedVal,description){
      console.log("Descrizione:",description)
      await addCalories(addedVal, description)
      retrieveCalories();
    }
    async function deleteData(){
      await deleteAllData();
      retrieveCalories();
      updateGoal();
    }
}
async function handleChangeGoal(string,setGoalChange){
  let num = parseInt(string)
  if(num >0){
      setGoalChange(num)
  }
}

function handleChange(string,setAddedVal){
    let num = parseInt(string)
    if(num >0){
        setAddedVal(num)
    }
}
const rowStyle = StyleSheet.create({
  rowBox:{
    flex: 1,
    position: 'relative',
    right: 0,
    float: 'right',
    flexDirection: 'row-reverse',
    marginBottom: 50,
    marginRight: '5%'
  },
  bigButton:{
    alignItems: 'center',
    alignItemsVertical: 'center',
    backgroundColor:'rgba(45, 71, 219, 0.25)',
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 2,
    height: 50,
    marginLeft: 5,
    marginBottom: '5%'
  },
  inputBox:{
    position: 'relative',
    marginLeft: 150,
    backgroundColor: 'white',
    marginLeft: 10,
    borderColow: 'black',
    borderWidth: 2,
    height: 50,
    minWidth: '23%'
  },
  bigButtonText:{
    padding: 13,
    fontFamily: 'Arial',
    fontWeight: 'bold'
  }
  
})
export default Calories