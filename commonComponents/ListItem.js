import React from 'react'
import { View, Text, StyleSheet,TouchableHighlight} from 'react-native'

const ListItem =({number, descriptionOrDate, onPress, string, isRunning})=>{
    let dateString = ''
    if(isRunning){
        dateString = 'Date: '
    }
    return(
        <View style={styles.listRow}>
            <View style={styles.textBoxes}>
                <Text style={styles.text1}>{number} {string}</Text>
                <Text style={styles.text2}>{dateString}{descriptionOrDate}</Text>
            </View>
            <View style={styles.buttonSide}>
            <TouchableHighlight
            onPress={onPress}
            underlayColor='#efefef'
            style={styles.button}>
                <Text>
                    Delete
                </Text>
            </TouchableHighlight>
            </View>
        </View>
        )
    }

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
       padding: 7,
       borderColor: '#ededed',
       borderWidth: 1,
       borderRadius: 4,
       marginRight: 5
    },
    textBoxes:{
        flex:1,
        flexDirection: 'row'
    },
    text1: {
        color: 'green',
        alignContent: 'center',
        borderColor: 'black',
        width: '40%',
        borderWidth: 1,
        position: 'relative',
        padding: '4%'
    },
    text2:{
        fontFamily: 'Arial',
        fontWeight: 'bold',
        borderColor: 'black',
        padding: '5%',
        width: '120%',
        borderWidth: 1,
        position: 'relative',
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        justifyContent: 'flex-end',
        color: 'rgba:(175, 47, 47, 1.0)'
    },
    listRow:{
        marginLeft: 20,
       marginRight: 20,
       backgroundColor: '#ffffff',
       borderTopWidth: 1,
       borderRightWidth: 1,
       borderLeftWidth: 1,
       borderColor: '#ededed',
       paddingLeft: 14,
       paddingTop: 7,
       paddingBottom: 7,
       shadowOpacity: 0.2,
       shadowRadius: 3,
       shadowColor: '#000000',
       shadowOffset: { width: 2, height: 2},
       flexDirection: 'row',
       alignItems: 'center'
    },
    buttonSide:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
 })
export default ListItem