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
       alignContent: 'center', 
   },
   headerText:{
       textAlign: 'center',
       fontSize: 100,
       color: 'rgba(0, 0, 0, 0.91)',
       fontWeight: 'bold',
       fontFamily: 'sans-serif'
   }
})


export default Titolo