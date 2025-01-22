import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import DailyGoal from '../common/DailyGoal.js';
import React, { useState } from 'react';
import styles from '../common/commonStyles.js'
import BackButton from '../BackButton.js';
import { getWater, addWater, undo, deleteAllData } from './WaterData.js';

function Water({navigation}){
  const [addedVal, setAddedVal] = useState(0);
  const [water, setWater] = useState(0);
  function count(array){
      let total = 0;
      array.forEach(sum);
      function sum(item){
        total += item;
      }
      return total;
    }
  React.useEffect(() => {
      //Load from memory on page arrival
      console.log("Qua")
      loadFromMemory()
      
    }, []);
  async function loadFromMemory(){
      //Load from memory
      try{
        const waterLoad = await getWater();
        console.log(waterLoad)
        setWater(count(waterLoad));
      } catch (e){
        console.error('Error retrieving calories: ', error);
      }
    }
    return(
      <View style={styles.container}>
        <BackButton navigation={navigation}/>
        <DailyGoal current={Number(water.toFixed(2))} goal={2} isWater={true}></DailyGoal>
        <View>
        <TextInput style={styles.inputBox}
              keyboardType={'numeric'}
              placeholder='Insert water in mL'
              onChangeText={value => handleChange(value,setAddedVal)}
          />
        <View style={specStyle.sideBySide}>
          <TouchableOpacity style={specStyle.sideBySideButton} onPress={() => 
            handleAdd(addedVal)}>
            <Text style={styles.bigButtonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={specStyle.sideBySideButton} onPress={() => 
            handleUndo()}>
            <Text style={styles.bigButtonText}>Undo add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={specStyle.sideBySideButton} onPress={() => 
            handleZero()}>
            <Text style={styles.bigButtonText}>Set to zero</Text>
          </TouchableOpacity>
          </View> 
        </View>
     </View>
    )
    function handleChange(string,setAddedVal){
        let num = parseInt(string)
        if(num >0){
            setAddedVal(num)
        }
    }
    async function handleUndo(){
      await undo()
      loadFromMemory();
    }
    async function handleZero(){
      await deleteAllData()
      loadFromMemory();
    }
    async function handleAdd(addedVal){
        await addWater(addedVal/1000)
        loadFromMemory();
    }
  }
const specStyle = StyleSheet.create({
  sideBySide:{
    flex:1,
    flexDirection: 'row'
  },
  sideBySideButton:{
    alignItems: 'center',
    alignItemsVertical: 'center',
    backgroundColor:'rgba(45, 71, 219, 0.25)',
    borderRadius: 4,
    marginLeft: 25,
    height: 40,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 2,
    minWidth:'25%'
  }
})
export default Water