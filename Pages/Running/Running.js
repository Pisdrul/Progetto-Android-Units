import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import DailyGoal from '../../commonComponents/DailyGoal.js';
import React, { useState } from 'react';
import styles from '../../commonComponents/commonStyles.js'
import BackButton from '../../commonComponents/BackButton.js';
import RunList from './RunList.js';
import { setGoalMemory, getGoal, getRunning, getDates, addEntry, deleteAllData } from './RunningData.js';
function Running({navigation}){
    const [addedVal, setAddedVal] = useState(0);
    const [kmList, setKmList] = useState([]);
    const [date, setDate] = useState(new Date());
    const [dateList, setDateList] = useState([]);
    const [goal, setGoal] = useState(25)
    const [goalChange, setGoalChange] = useState(0)

    function iterateRuns(){
        console.log(kmList)
        let total = 0;
        kmList.forEach(sum);
        function sum(item){
            total += item;
        }
        return total;
    }
    function fixDates(){
        let dates = []
        dateList.forEach(fix);
        function fix(string){
            const date = new Date(string);
            const fixedDate = date.getDate() + ' / ' + (date.getMonth()+1)
            dates.push(fixedDate)
        }
        return dates
    }
    async function retrieveData(){
        //Load from memory
        try{
          const runHistory = await getRunning();
          const dates = await getDates();
          setKmList(runHistory)
          setDateList(dates)
          console.log("retrieved data!")
        } catch (e){
          console.error('Error retrieving data: ', error);
        }
      }
    
    async function updateGoal (){
        const goal = await getGoal()
        setGoal(goal)
      }

    React.useEffect(() => {
        //Load from memory on page arrival
        retrieveData();
        updateGoal();
      }, []);

    return(
        <View style={styles.container}>
            <BackButton navigation={navigation}/>
            <DailyGoal current={Number(iterateRuns().toFixed(2))} goal={goal} isRunning={true}></DailyGoal>
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
            <RunList listOfRuns={kmList} listOfDates={fixDates()} functionRun={setKmList} functionDates={setDateList} retrieve ={retrieveData}></RunList>
        </ScrollView>
        <TextInput style={styles.inputBox}
            keyboardType={'numeric'}
            placeholder='Insert how many meters you have run'
            onChangeText={value => handleChange(value,setAddedVal)}
        />
        <TouchableOpacity style={styles.bigButton} onPress={() => handleAdd(addedVal, date)}>
            <Text style={styles.bigButtonText}>Add</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.bigButton} onPress={() => deleteData()}>
            <Text style={styles.bigButtonText}>Delete All</Text>
        </TouchableOpacity>
     </View>
    )

    function handleChange(string,setAddedVal){
        let num = parseInt(string)
        if(num >0){
            setAddedVal(num)
        }
    }

    async function handleSetGoal(goalChange){
          console.log("Goal:",goalChange)
          await setGoalMemory(goalChange)
          updateGoal();
        }
    
    async function handleChangeGoal(string,setGoalChange){
        let num = parseInt(string)
        if(num >0){
            setGoalChange(num)
        }
        }
    
    async function handleAdd(addedVal){
        let date = new Date()
        console.log('added date:',date)
        await addEntry(addedVal/1000, date)
        retrieveData();
        }

    async function deleteData(){
        await deleteAllData();
        retrieveData();
        updateGoal();
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
      marginRight: '5%',

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
      borderColor: 'black',
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
export default Running