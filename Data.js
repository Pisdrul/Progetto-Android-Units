import AsyncStorage from "@react-native-async-storage/async-storage";

const calorieKey = '@calories_'

export const getCalories = async () => {
    try { x
        const jsonValue = await AsyncStorage.getItem(calorieKey);
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error){
        console.error('Error retrieving calories:', error);
        return [];
    }
};

export const saveCalories = async (calories) => {
    try {
        const jsonValue = JSON.stringify(calories);
        console.log("here!")
        await AsyncStorage.setItem(calorieKey, jsonValue);
    } catch (error) {
        console.error('Error saving calories:', error);
    }
}
export const addCalories = async (calorie) => {
    try {
        const calories = await getCalories();
        calories.push(calorie);
        await saveCalories(calories);
    } catch (error) {
        console.error('Error adding calories', error);
    }
};

export const removeCalories = async (caloriesIndex) => {
    try {
      const calories = await getCalories();
      const updatedCalories = calories.filter(calorie => calorie.index !== caloriesIndex);
      await saveCalories(updatedCalories);
    } catch (error) {
      console.error('Error removing calories:', error);
    }
  };