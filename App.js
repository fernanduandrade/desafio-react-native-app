import React from 'react';
import { Image,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/Login/Login';
import Profile from './src/screens/Profile/Profile';
import Repos from './src/screens/Repos/Repos';
import Followers from './src/screens/Followers/Followers';
import Following from './src/screens/Following/Following';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
    return (
	
	<Tab.Navigator tabBarOptions={{
		activeTintColor: 'black',
		inactiveTintColor: 'gray',
	}}
>
	    <Tab.Screen 
	    	name="Perfil" 
	    	component={Profile} 
	    	options={{tabBarIcon: ({ tintColor }) => (
		        <Image source={require('./src/assets/images/home.png')} style={{ width: 26, height: 26, tintColor: tintColor }}/>
		      ),}} 
	    />
	    <Tab.Screen 
	    	name="Repos" 
	    	component={Repos}	
	    	options={{tabBarIcon: ({ tintColor }) => (
		        <Image source={require('./src/assets/images/github2.png')} style={{ width: 26, height: 26, tintColor: tintColor }}/>
		      ),}} 
	    />
	    <Tab.Screen 
	    	name="Seguidores" 
	    	component={Followers}
	    	options={{tabBarIcon: ({ tintColor }) => (
		        <Image source={require('./src/assets/images/people.png')} style={{ width: 26, height: 26, tintColor: tintColor }}/>
		      ),}} 
	    />
	    <Tab.Screen 
	    	name="Seguindo" 
	    	component={Following}
	    	options={{tabBarIcon: ({ tintColor, focused }) => (
		        <Image source={require('./src/assets/images/people.png')} style={{ width: 26, height: 26, tintColor: tintColor }}/>
		      ),}} 
	    />
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
