import {StyleSheet, Text, View} from 'react-native';

const DailyGoal = ({current,goal,isWater}) =>{
    let isOver = false;
    let string = '';
    let cur = 'calories';
    if(current>goal){
        isOver = true;
    }
    if(isWater){
        string = 'L'
        cur = 'water'
    }
    return(
    <View style={styles.container}>
        <Text style={styles.dailyCal}>Daily {cur}:</Text>
        <Text style={styles.nums}><Text style={(isOver && !isWater) && styles.overGoal }>{current}{string}</Text>/{goal}{string}</Text>
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