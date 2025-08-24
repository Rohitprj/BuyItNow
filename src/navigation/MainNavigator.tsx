import Account from '@modules/account';
import Cart from '@modules/cart';
import Category from '@modules/categories';
import Home from '@modules/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '@utils/Constants';
import { FC } from 'react';
import { Platform } from 'react-native';
import { AccountIcon, CartIcon, CategoriesIcon, HomeIcon } from './TabIcons';

const Tab = createBottomTabNavigator();

const MainNavigator: FC = () => {
  const count = 2;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.active,
        tabBarInactiveTintColor: Colors.inactive,
        lazy: true,
        tabBarStyle: {
          paddingTop: Platform.OS === 'android' ? 0 : 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <HomeIcon focused={focused} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CategoriesIcon focused={focused} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AccountIcon focused={focused} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CartIcon focused={focused} color={color} size={size} />
          ),
          tabBarBadge: count > 0 ? count : undefined,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
