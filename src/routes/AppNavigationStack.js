import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login/Login';
import AppTabs from './AppTabs';


const { Navigator, Screen } = createStackNavigator();

function AppNavigationStack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Screen name="Login" component={Login}/>
                <Screen name="Tabs" component={AppTabs}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppNavigationStack;