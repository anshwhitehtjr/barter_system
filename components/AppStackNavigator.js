import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ReciverDetails from '../screens/ReciverDetails';

export const AppStackNavigator = createStackNavigator({
    BarterList: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    ReciverDetails: {
        screen: ReciverDetails,
        navigationOptions: {
            headerShown: false
        }
    }
},
    { initialRouteName: 'BarterList' }
)