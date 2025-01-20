import AsyncStorage from "@react-native-async-storage/async-storage";

const calorieKey = '@calories_'
const descriptionKey = '@descriptionCal_'
export const getCalories = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(calorieKey);
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error){
        console.error('Error retrieving calories:', error);
        return [];
    }
};
export const saveDescriptions = async (description) => {
    try {
        const jsonValue = JSON.stringify(description);
        console.log("Added description")
        await AsyncStorage.setItem(descriptionKey, jsonValue);
    } catch (error) {
        console.error('Error saving description:', error);
    }
}
export const getDescriptions = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(descriptionKey);
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error){
        console.error('Error retrieving description:', error);
        return [];
    }
}
export const saveCalories = async (calories) => {
    try {
        const jsonValue = JSON.stringify(calories);
        console.log("Added calories")
        await AsyncStorage.setItem(calorieKey, jsonValue);
    } catch (error) {
        console.error('Error saving calories:', error);
    }
}
export const addCalories = async (calorie, description) => {
    try {
        const calories = await getCalories();
        const descriptions = await getDescriptions();
        console.log(descriptions)
        calories.push(calorie);
        descriptions.push(description)
        await saveCalories(calories);
        await saveDescriptions(descriptions);
    } catch (error) {
        console.error('Error adding calories', error);
    }
};

export const removeCalories = async (caloriesIndex) => {
    try {
      const calories = await getCalories();
      const halfCal = calories.slice(0,caloriesIndex)
      const postCal = calories.slice(caloriesIndex+1)
      await saveCalories(halfCal.concat(postCal));
      const descriptions = await getDescriptions();
      const halfDesc = descriptions.slice(0,caloriesIndex)
      const postDesc = descriptions.slice(caloriesIndex+1)
      await saveDescriptions(halfDesc.concat(postDesc));
    } catch (error) {
      console.error('Error removing calories:', error);
    }
  };

export const deleteAllData = async() =>{
    AsyncStorage.clear()
    console.log("Cleared Data")
}