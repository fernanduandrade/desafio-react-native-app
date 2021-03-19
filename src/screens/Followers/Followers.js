import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import Header from '../../components/Header/Header';
import FollowCard from '../../components/FollowCard/FollowCard';
import styles from './styles';

export default function Followers({route}) {

	const {userFollowers} = route.params;
	const {followersCount} = route.params;

	const [followers, setFollowers] = useState([])

	useEffect(() => {
		async function loadFollowers() {
			try {
				const result = await axios.get(`${userFollowers}?per_page=500`);
				setFollowers(result.data);

			} catch (err) {
				console.log(err);
			}
		};
		loadFollowers();
	}, []);

    return (
		<View style={styles.container}>
			<Header counter={followersCount} description="seguidores" />
			
			<ScrollView>
				{followers.map((follower) => (
					<FollowCard  
						key={follower.id}
						useLogin={follower.login}
						avatarUrl={follower.avatar_url}
					/>
				))}
			</ScrollView>

		</View>
    );
};

