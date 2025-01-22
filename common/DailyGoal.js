import {StyleSheet, Text, View} from 'react-native';

const DailyGoal = ({current,goal,isWater,isRunning}) =>{
    let isOver = false;
    let string = '';
    let cur = 'Daily calories';
    if(current>goal){
        isOver = true;
    }
    if(isWater){
        string = 'L'
        cur = 'Daily water'
    } else if(isRunning){
        string = 'Km'
        cur = 'Weekly running'
    }
    return(
    <View style={styles.container}>
        <Text style={styles.dailyCal}>{cur}:</Text>
        <Text style={styles.nums}><Text style={(isOver && !isWater && !isRunning) && styles.overGoal }>{current}</Text>/{goal}{string}</Text>
    </View>
    )
}
const styles= StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 30,
        borderColor: 'black',
        borderWidth: 2,
        position: 'relative'
    },
    nums:{
        fontWeight: 'bold',
        fontSize: 60,
        color: 'green'
        },
    overGoal:{
        color: 'red'
    },
    dailyCal:{
        fontSize: 15,
        fontWeight: 'bold'
    }
})
export default DailyGoal