import React from 'react'
import {ScrollView, View, Text} from 'react-native'
import { StyleSheet } from 'react-native'
import ListItem from './CalorieListItem'
import { removeCalories, getCalories, getDescriptions } from './CaloriesData'

const CalList = ({listOfCalories, listOfDescriptions, functionCal, functionDesc, retrieve}) => {
    const list = listOfCalories
    async function deleteCalories(index){
        removeCalories(index)
        const calories = await getCalories();
        const descriptions = await getDescriptions();
        functionCal(calories)
        functionDesc(descriptions)
        retrieve()
    } 
    let calList = list.map((value,i)=>{
        return(
        <ListItem number={value} description={listOfDescriptions[i]} id={i} key={i} onPress={()=>deleteCalories(i) }></ListItem>
        )
    }
    
    )
    return(
        <View>
            <ScrollView>
            {calList}
            </ScrollView>
        </View>
    )
}

  
const styled = StyleSheet.create({
    textList:{
        fontSize: 15
    }
})
export default CalList