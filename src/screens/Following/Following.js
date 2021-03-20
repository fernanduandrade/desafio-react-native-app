import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import api from '../../services/api';

import Header from '../../components/Header/Header';
import FollowCard from '../../components/FollowCard/FollowCard';
import GithubUserContext from '../../context/GithubUserContext';

import styles from './styles';

export default function Following() {

	const {githubUser, githubFollowing, setGithubFollowing} = useContext(GithubUserContext)
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadFollowingUser() {
			try {
				const result = await api.get(`${githubUser.login}/following?per_page=500`);
				setGithubFollowing(result.data);
				setLoading(true);
			} catch (err) {
				console.log(err);
			}
		};
		loadFollowingUser();
	}, []);

    return (
		<View style={styles.container}>
			<Header counter={githubUser.following} description="Seguindo" />
			
			<ScrollView>
				{loading ? githubFollowing.map((following) => (
					<FollowCard  
						key={following.id}
						useLogin={following.login}
						avatarUrl={following.avatar_url}
					/>
				
				)) : <ActivityIndicator size="large" color="#ffffff" />}
				
			</ScrollView>
		</View>
    );
};

