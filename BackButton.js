import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

function BackButton({navigation}){
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        height: 40,
        flexDirection: 'row',
        borderTopColor: '#dddddd'
    },
    backButton:{
        flex: 1,
        width: 150,
        backgroundColor:'gray',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    backButtonText:{
        fontWeight: 'bold',
        fontSize: 25
    }
    })
 
export default BackButton