import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'rgba(105, 233, 201, 0.25)'
  },
  containerButtons:{
    marginTop: 40
  },
  inputBox:{
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    borderColow: 'black',
    borderWidth: 2
  },
  bigButton:{
    alignItems: 'center',
    alignItemsVertical: 'center',
    backgroundColor:'rgba(45, 71, 219, 0.25)',
    borderRadius: 4,
    marginRight: 50,
    marginLeft: 50,
    height: 40,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 2
  },
  bigButtonText:{
    padding: 10,
    fontFamily: 'Arial',
    fontWeight: 'bold'
  }
});

export default styles