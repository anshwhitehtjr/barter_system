import { createDrawerNavigator } from 'react-navigation-drawer';
import MyBarters from '../screens/MyBarters'
import SettingScreen from '../screens/SettingScreen.js';
import customSidebarMenu from './components/customSidebarMenu.js'
import { AppTabNavigator } from './AppTabNavigator'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    MyBarters: {
        screen: MyBarters
    },
    Settings: {
        screen: SettingScreen
    }
},
    {
        contentComponent: customSidebarMenu
    },
    {
        initialRouteName: 'Home'
    })