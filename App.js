import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ComponentsScreen from './screens/ComponentsScreens';
import ListScreen from './screens/ListScreen';
import ImageScreen from './screens/ImageScreen';



const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Components: ComponentsScreen,
  List: ListScreen,
  Images: ImageScreen,
},
{
    initialRouteName: 'Home',
    defaultNavigationOptions:{
        title: 'Restaurants',
    },
}
);

export default createAppContainer(AppNavigator);