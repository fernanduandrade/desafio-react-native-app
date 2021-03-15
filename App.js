import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/pages/Login/Login';
import Profile from './src/pages/Profile/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
	<Tab.Navigator>
	    <Tab.Screen name="Perfil" component={Profile}/>
	    <Tab.Screen name="Repo" component={Profile}/>
	    <Tab.Screen name="Seguidores" component={Profile}/>
	    <Tab.Screen name="Seguindo" component={Profile}/>
	</Tab.Navigator>
    );
}
 
export default function App() {
    return (
	<NavigationContainer>
	    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
		<Stack.Screen name="Login" component={Login} />
		<Stack.Screen name="Tabs" component={Tabs} />
	    </Stack.Navigator>
	</NavigationContainer>
    );
}
