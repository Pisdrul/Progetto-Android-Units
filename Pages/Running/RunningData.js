import AsyncStorage from "@react-native-async-storage/async-storage";

const runningKey = '@running_'
const dateKey = '@dates_'
const goalKey = '@runningGoal_'
export const getGoal = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(goalKey);
        return jsonValue != null ? JSON.parse(jsonValue) : 25
    } catch (error){
        console.error('Error retrieving goal:', error);
        return [];
    }
}
export const setGoalMemory = async (goal) => {
    try {
        const jsonValue = JSON.stringify(goal);
        console.log("Changed goal")
        await AsyncStorage.setItem(goalKey, jsonValue);
    } catch (error) {
        console.error('Error saving goal:', error);
    }
}
export const getRunning = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(runningKey);
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error){
        console.error('Error retrieving running data:', error);
        return [];
    }
};
export const getDates = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(dateKey);
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error){
        console.error('Error retrieving dates:', error);
        return [];
    }
};
export const saveRuns = async (runs) => {
    try {
        const jsonValue = JSON.stringify(runs);
        console.log("Saved run")
        await AsyncStorage.setItem(runningKey, jsonValue);
    } catch (error) {
        console.error('Error saving runs:', error);
    }
}
export const saveDate = async (dates) => {
    try {
        const jsonValue = JSON.stringify(dates);
        console.log("Saved date");
        await AsyncStorage.setItem(dateKey, jsonValue);
    } catch (error) {
        console.error('Error saving date:', error);
    };
}
export const addRun = async (run) => {
    try {
        const runList = await getRunning();
        console.log(runList);
        runList.push(run);
        await saveRuns(runList);
    } catch (error) {
        console.error('Error adding run', error);
    };
};
export const addDate = async (date) => {
    try {
        const dateList = await getDates();
        console.log(dateList);
        dateList.push(date);
        await saveDate(dateList);
    } catch (error) {
        console.error('Error adding date', error);
    };
};
export const addEntry = async (kilometers, date) =>{
    await addRun(kilometers);
    await addDate(date);
}
export const deleteEntry = async (index) => {
    try {
      const runHistory = await getRunning();
      const halfRun = runHistory.slice(0,index);
      const postRun = runHistory.slice(index+1);
      await saveRuns(halfRun.concat(postRun));
      const dates = await getDates();
      const halfDates = dates.slice(0,index);
      const postDates = dates.slice(index+1);
      await saveDate(halfDates.concat(postDates));
    } catch (error) {
      console.error('Error removing run entry:', error);
    }
  };
export const deleteAllData = async() =>{
    saveRuns([]);
    saveDate([]);
    console.log("Cleared Data");
}