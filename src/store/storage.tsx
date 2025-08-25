import AsyncStorage from '@react-native-async-storage/async-storage';

const reduxStorage = {
  setItem: async (key: string, val: any) => {
    await AsyncStorage.setItem(key, val);
    return Promise.resolve(true);
  },
  getItem: async (key: string) => {
    const value = await AsyncStorage.getItem(key);
    return Promise.resolve(value);
  },
  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
    return Promise.resolve();
  },
};

export default reduxStorage;
