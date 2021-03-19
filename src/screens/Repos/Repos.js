import React, {useEffect, useContext} from 'react';
import axios from 'axios';

import { View, ScrollView } from 'react-native';

import Header from '../../components/Header/Header';
import RepoCard from '../../components/RepoCard/RepoCard.js';

import GithubUserContext from '../../context/GithubUserContext';

import styles from './styles';

export default function Repos() {

	const {githubUser, githubRepos, setGithubRepos} = useContext(GithubUserContext)

	useEffect(() => {
		async function loadRepos() {
			try {
				const result = await axios.get(`https://api.github.com/users/${githubUser.login}/repos`);
				setGithubRepos(result.data);

			} catch (err) {
				console.log(err);
			}
		};
		loadRepos();
	}, []);
	

    return (
	<View style={styles.container}>
		<Header counter={githubUser.public_repos} description="repositórios" />

		<ScrollView>
			{githubRepos.map((repo) => (
				
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

