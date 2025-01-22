import React from 'react'
import {ScrollView, View} from 'react-native'
import { StyleSheet } from 'react-native'
import ListItem from '../common/ListItem'
import { getRunning, getDates, deleteEntry } from './RunningData'

const RunningList = ({listOfRuns, listOfDates, functionRun, functionDates, retrieve}) => {
    const list = listOfRuns
    async function deleteRun(index){
        deleteEntry(index)
        const runHistory = await getRunning();
        const dates = await getDates();
        functionRun(runHistory)
        functionDates(dates)
        retrieve()
    } 
    let runList = list.map((value,i)=>{
        return(
        <ListItem number={value} descriptionOrDate={listOfDates[i]} id={i} key={i} onPress={()=>deleteRun(i)} string={'km'} isRunning={true}></ListItem>
        )
    }
    
    )
    return(
        <View>
            <ScrollView>
                {runList}
            </ScrollView>
        </View>
    )
}

  
const styled = StyleSheet.create({
    textList:{
        fontSize: 15
    }
})
export default RunningList