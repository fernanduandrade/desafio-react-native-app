import React, { useEffect, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import Header from '../../components/Header/Header';
import FollowCard from '../../components/FollowCard/FollowCard';
import GithubUserContext from '../../context/GithubUserContext';

import styles from './styles';

export default function Following() {

	const {githubUser, githubFollowing, setGithubFollowing} = useContext(GithubUserContext)

	useEffect(() => {
		async function loadFollowingUser() {
			try {
				const result = await axios.get(`https://api.github.com/users/${githubUser.login}/following?per_page=500`);
				setGithubFollowing(result.data);

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
				{githubFollowing.map((following) => (
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

