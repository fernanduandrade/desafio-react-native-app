import React from 'react';
import {Image} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../screens/Profile/Profile';
import Repos from '../screens/Repos/Repos';
import Followers from '../screens/Followers/Followers';
import Following from '../screens/Following/Following';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTabs() {
    return (
        <Navigator
            tabBarOptions={{
                activeTintColor: 'black',
		        inactiveTintColor: 'gray',
            }}
        >
            <Screen 
                name="Perfil" 
	    	    component={Profile} 
	    	    options={{tabBarIcon: ({ tintColor }) => (
		         <Image source={require('../assets/images/home.png')} style={{ width: 26, height: 26, tintColor: tintColor }}/>
		         ),}} 
            />
            <Screen 
                name="Repos" 
	    	    component={Repos}	
	    	    options={{tabBarIcon: ({ tintColor }) => (
		            <Image source={require('../assets/images/github2.png')} style={{ width: 26, height: 26, tintColor: tintColor }}/>
		        ),}} 
            />
            <Screen 
                name="Seguidores" 
                component={Followers}
                options={{tabBarIcon: ({ tintColor }) => (
                    <Image source={require('../assets/images/people.png')} style={{ width: 26, height: 26, tintColor: tintColor }}/>
                ),}} 
            />
            <Screen 
                name="Seguindo" 
                component={Following}
                options={{tabBarIcon: ({ tintColor }) => (
                    <Image source={require('../assets/images/people.png')} style={{ width: 26, height: 26, tintColor: tintColor }}/>
                ),}} 
            />
        </Navigator>
    );
}

export default AppTabs;