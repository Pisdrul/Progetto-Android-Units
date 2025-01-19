import React from 'react'
import {ScrollView, View, Text} from 'react-native'
import { StyleSheet } from 'react-native'
import ListItem from './ListItem'

const CalList = (caloriesList, deleteFunction) => {
    const list = caloriesList.list
    let calList = list.map((value,i)=>{
        return(
        <ListItem number={value} id={i} key={i} onPress={()=>deleteFunction(0) }></ListItem>
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