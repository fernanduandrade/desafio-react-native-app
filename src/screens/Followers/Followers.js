import React, { useEffect, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import Header from '../../components/Header/Header';
import FollowCard from '../../components/FollowCard/FollowCard';
import GithubUserContext from '../../context/GithubUserContext';

import styles from './styles';

export default function Followers() {

	const {githubUser, githubFollowers, setGithubFollowers} = useContext(GithubUserContext)

	useEffect(() => {
		async function loadFollowers() {
			try {
				const result = await axios.get(`https://api.github.com/users/${githubUser.login}/followers?per_page=500`);
				setGithubFollowers(result.data);

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
				{githubFollowers.map((follower) => (
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

