import React from "react";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Exchange from '../screens/Exchange';
import { AppStackNavigator } from './AppStackNavigator';

export const TabNavigator = createBottomTabNavigator({
    HomeScreen: { screen: AppStackNavigator },
    Exchange: { screen: Exchange },
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const routeName = navigation.state.routeName;
                if (routeName === "HomeScreen") {
                    return (
                        <Image
                            source={require("./assets/home-icon.png")}
                            style={{ width: 20, height: 20 }}
                        />
                    )
                }
                else if (routeName === "Exchange") {
                    return (
                        <Image
                            source={require("./assets/ads-icon.png")}
                            style={{ width: 20, height: 20, }}
                        />
                    )
                }
            }
        })
    }
);