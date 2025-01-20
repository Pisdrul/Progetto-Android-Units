import React from 'react'
import {ScrollView, View, Text} from 'react-native'
import { StyleSheet } from 'react-native'
import ListItem from './CalorieListItem'
import { removeCalories } from './CaloriesData'

const CalList = ({listOfCalories, listOfDescriptions}) => {
    const list = listOfCalories
    let calList = list.map((value,i)=>{
        return(
        <ListItem number={value} description={listOfDescriptions[i]} id={i} key={i} onPress={()=>removeCalories(i) }></ListItem>
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