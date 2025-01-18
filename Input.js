import React from 'react'
import { View, TextInput, StyleSheet,} from 'react-native'


const Input = ({ inputValue, inputChange}) => (
   <View style={styles.inputContainer}>
       <TextInput
           value={inputValue}
           style={styles.input}
           placeHolder='What needs to be done?'
           placeHolderTextColor='#CACACA'
           selectionColor='#666666'
           onChangeText={(text)=> this.onChanged(text)}/>
   </View>


)
function onChanged (text) {
    this.setState({
        mobile: text.replace(/[^0-9]/g, ''),
    });
}

const styles = StyleSheet.create({
   inputContainer: {
       marginLeft: 20,
       marginRight: 20,
       shadowOpacity: 0.2,
       shadowRadius: 3,
       shadowColor: '#000000',
       shadowOffset: { width: 2, height: 2 }
   },
   input: {
       height: 60,
       backgroundColor: '#ffffff',
       paddingLeft: 10,
       paddingRight: 10
   }
})


export default Input