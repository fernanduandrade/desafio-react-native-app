import React, {useState, useEffect, useContext} from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import api from '../../services/api';

import Header from '../../components/Header/Header';
import RepoCard from '../../components/RepoCard/RepoCard.js';

import GithubUserContext from '../../context/GithubUserContext';

import styles from './styles';

export default function Repos() {

	const {githubUser, githubRepos, setGithubRepos} = useContext(GithubUserContext)
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadRepos() {
			try {
				const result = await api.get(`${githubUser.login}/repos`);
				setGithubRepos(result.data);
				setLoading(true);
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
			{loading ? githubRepos.map((repo) => (
				<RepoCard 
					key={repo.id} 
					repoName={repo.name} 
					Repodescription={repo.description} 
					repoStars={repo.stargazers_count}
				/>
			)) : <ActivityIndicator size="large" color="#ffffff" />}
			
		</ScrollView>

	</View>
    );
};

