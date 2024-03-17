import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import InstaHome from '../screens/InstagramHome';
import Page1 from '../screens/Page1';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StackNav = createNativeStackNavigator();
export function HomeStackMavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="InstaHome"
        component={BottomNavigation}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={InstaHome}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
        }}
      />
      <Tab.Screen
        name="Page1"
        component={Page1}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
        }}
      />
      <Tab.Screen
        name="Page2"
        component={Page2}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
        }}
      />
      <Tab.Screen
        name="Page3"
        component={Page3}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
        }}
      />
    </Tab.Navigator>
  );
}
