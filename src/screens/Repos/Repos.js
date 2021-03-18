import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

import RepoCard from '../../components/RepoCard/RepoCard.js';

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
	<View style={{
	    flex: 1,
	    backgroundColor: '#292929'
	}}>
		<View style={{ backgroundColor: '#1F1F1F', width: 400, flexDirection: 'row', justifyContent: 'flex-start'}} >
				<TouchableOpacity >
					<Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30, paddingLeft: 10}}>←</Text>
				</TouchableOpacity>
				<Text style={{color: "#FFFFFF", top: 15, paddingLeft: 90, fontWeight: 'bold'}}>{repoCount} repositórios</Text>
		</View>

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

