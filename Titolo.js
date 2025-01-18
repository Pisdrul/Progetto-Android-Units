import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Titolo = () => (
   <View style={styles.header}>
       <Text style={styles.headerText}>
           StayFit
       </Text>
   </View>
)


const styles = StyleSheet.create({
   header:{
       marginTop: 150
   },
   headerText:{
       textAlign: 'center',
       fontSize: 100,
       color: 'rgba(59, 30, 40, 0.25)',
       fontWeight: 'bold',
       fontFamily: 'Comic Sans'
   }
})


export default Titolo