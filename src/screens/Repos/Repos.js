import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import Header from '../../components/Header/Header';
import RepoCard from '../../components/RepoCard/RepoCard.js';

import styles from './styles';

export default function Repos({route}) {

	const {userRepos} = route.params;
	const {repoCount} = route.params;
	const [repos, setRepos] = useState([])

	useEffect(() => {
		async function loadRepos() {
			try {
				const result = await axios.get(`${userRepos}`);
				setRepos(result.data);

			} catch (err) {
				console.log(err);
			}
		};
		loadRepos();
	}, []);

    return (
	<View style={styles.container}>
		<Header counter={repoCount} description="repositórios" />

		<ScrollView>
			{repos.map((repo) => (
				
				<RepoCard 
					key={repo.id} 
					repoName={repo.name} 
					Repodescription={repo.description} 
					repoStars={repo.stargazers_count}
				/>
			))}

		</ScrollView>

	</View>
    );
};

