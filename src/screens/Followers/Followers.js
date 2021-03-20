import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import api from '../../services/api';

import Header from '../../components/Header/Header';
import FollowCard from '../../components/FollowCard/FollowCard';
import GithubUserContext from '../../context/GithubUserContext';

import styles from './styles';

export default function Followers() {

	const {githubUser, githubFollowers, setGithubFollowers} = useContext(GithubUserContext)
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadFollowers() {
			try {
				const result = await api.get(`${githubUser.login}/followers?per_page=500`);
				setGithubFollowers(result.data);
				setLoading(true);

			} catch (err) {
				console.log(err);
			}
		};
		loadFollowers();
	}, []);

    return (
		<View style={styles.container}>
			<Header counter={githubUser.followers} description="seguidores" />
			
			<ScrollView>
				{loading ? githubFollowers.map((follower) => (
					<FollowCard  
						key={follower.id}
						useLogin={follower.login}
						avatarUrl={follower.avatar_url}
					/>
				)) : <ActivityIndicator size="large" color="#ffffff" />}
			</ScrollView>

		</View>
    );
};

