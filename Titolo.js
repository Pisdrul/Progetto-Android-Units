import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


function Titolo(){
    return(
   <View style={styles.header}>
       <Text style={styles.headerText}>
           StayFit
       </Text>
   </View>
)}


const styles = StyleSheet.create({
   header:{
       marginTop: 150,
       margin:30,
       borderRadius: 10,
       backgroundColor: 'rgba(27, 16, 27, 0.25)',
   },
   headerText:{
       textAlign: 'center',
       fontSize: 100,
       color: 'rgba(255, 0, 0, 0.91)',
       fontWeight: 'bold',
       fontFamily: 'Comic Sans'
   }
})


export default Titolo