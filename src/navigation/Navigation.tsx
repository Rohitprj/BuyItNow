import Home from '@modules/home';
import Splash from '@modules/home/onboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { navigationRef } from './NavigationUtils';
import MainNavigator from './MainNavigator';
import Products from '@modules/products';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen
          name="MainNavigator"
          component={MainNavigator}
        ></Stack.Screen>
        <Stack.Screen name="Products" component={Products}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
