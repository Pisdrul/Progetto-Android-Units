import AsyncStorage from "@react-native-async-storage/async-storage";

const waterKey = '@water_'

export const getWater = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(waterKey);
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error){
        console.error('Error retrieving water:', error);
        return [];
    }
};
export const saveWater = async (waters) => {
    try {
        const jsonValue = JSON.stringify(waters);
        console.log("Added waters")
        await AsyncStorage.setItem(waterKey, jsonValue);
    } catch (error) {
        console.error('Error saving waters:', error);
    }
}
export const addWater = async (water) => {
    try {
        const waterList = await getWater();
        console.log(waterList)
        waterList.push(water)
        await saveWater(waterList)
    } catch (error) {
        console.error('Error adding water', error);
    }
};

export const undo = async () => {
    try {
      const waters = await getWater();
      console.log(waters)
      waters.pop()
      console.log(waters)
      saveWater(waters)
    } catch (error) {
      console.error('Error with undo:', error);
    }
  };
export const deleteAllData = async() =>{
    saveWater([]);
    console.log("Cleared Data")
}