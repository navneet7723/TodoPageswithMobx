import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import ResultsScreen from './Result.js'
import HomeScreen from './Home.js';
import { Constants } from 'expo';

console.disableYellowBox = true;

const TabNavigator = createBottomTabNavigator(
{
  Home: HomeScreen,
  Results: ResultsScreen
},
{
  initialRouteName: "Home",
},
);

export default createAppContainer(TabNavigator);
