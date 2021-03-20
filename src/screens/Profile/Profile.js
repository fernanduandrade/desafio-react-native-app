import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

import api from '../../services/api';

import UserInfo from '../../components/UserInfo/UserInfo';
import LoggedUser from '../../components/LoggedUser/LoggedUser';
import SaveUser from '../../components/SaveUser/SaveUser';
import GithubUserContext from '../../context/GithubUserContext';

import styles from './styles';

export default function Profile({navigation}) {
    
	const {githubUser, setGithubUser, textInputUser, loggedUser} = useContext(GithubUserContext)
	const [loading, setLoading] = useState(false);

	useEffect(() => {
	
		async function loadUser() {
			try {
				const result = await api.get(`${textInputUser}`);
				setGithubUser(result.data);

			} catch (err) {
				console.log(err);
			}
		};

		loadUser();
	}, []);


	return (
		<View style={styles.container}>
			{loggedUser == textInputUser ? <LoggedUser githubUserLogin={githubUser.login}/> : <SaveUser githubUserLogin={githubUser.login}/>}
		
			<Image style={styles.userAvatarImg} source={{ uri: `${githubUser.avatar_url}` }} />
			
			<View style={styles.userDescription}>
				<View style={styles.square}></View>
				<Text style={styles.userName}>{githubUser.name}</Text>
				<Text style={styles.userLocation}>{githubUser.location}</Text>
			</View>

			<View style={styles.userInfo}>
				<UserInfo
					counter={githubUser.followers} description="Seguidores"
					onPress={() => navigation.navigate('Seguidores')} 
				/>
				<UserInfo
					counter={githubUser.following} description="Seguindo"
					onPress={() => navigation.navigate('Seguindo')} 
				/>
				<UserInfo 
					counter={githubUser.public_repos} description="Repositórios"
					onPress={() => navigation.navigate('Repos')} 
				/>
			</View>

			<View style={styles.userBioContainer}>
				<View style={styles.square}></View>
				<Text style={styles.userBio}>BIO</Text>
				<Text style={styles.userBioInfo}>{githubUser.bio}</Text>	
			</View>
		</View>
	);
}
