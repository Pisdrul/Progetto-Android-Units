import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const DailyCalories = ({calories,calorieGoal}) =>{
    let isOver = false;
    if(calories>calorieGoal){
        isOver = true;
    }
    return(
    <View style={styles.calContainer}>
        <Text style={styles.calorieNums}><Text style={isOver && styles.overCalories}>{calories}</Text>/{calorieGoal}</Text>
    </View>
    )
}
const styles= StyleSheet.create({
    calContainer:{
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 30
    },
    calorieNums:{
        fontWeight: 'bold',
        fontSize: 60,
        color: 'green',
        },
    overCalories:{
        color: 'red'
    }
})
export default DailyCalories