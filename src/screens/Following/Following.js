import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import Header from '../../components/Header/Header';
import FollowCard from '../../components/FollowCard/FollowCard';

import styles from './styles';

export default function Following({route}) {

	const {userFollwing} = route.params;
	const {followingsCount} = route.params;

	const [following, setFollowing] = useState([])

	useEffect(() => {
		async function loadFollowingUsers() {
			try {
				const result = await axios.get(`https://api.github.com/users/${userFollwing}/following?per_page=500`);
				setFollowing(result.data);

			} catch (err) {
				console.log(err);
			}
		};
		loadFollowingUsers();
	}, []);

    return (
		<View style={styles.container}>
			<Header counter={followingsCount} description="Seguindo" />
			
			<ScrollView>
				{following.map((following) => (
					<FollowCard  
						key={following.id}
						useLogin={following.login}
						avatarUrl={following.avatar_url}
					/>
				
				))}
			</ScrollView>
		</View>
    );
};

