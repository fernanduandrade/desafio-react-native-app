import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

import UserInfo from '../../components/UserInfo/UserInfo';

import styles from './styles';

export default function Profile({route, navigation}) {

    const user = route.params.user;

	const [githubUser, setGithubUser] = useState([]);

	useEffect(() => {
		async function loadUser() {
			try {
				const result = await axios.get(`https://api.github.com/users/${user}`);
				setGithubUser(result.data);

			} catch (err) {
				console.log(err);
			}
		};
		loadUser();
	}, []);


	return (
		<View style={styles.container}>
			<View style={styles.profileHeader}>
				<Text style={styles.userLogin}>@{githubUser.login}</Text>

				<TouchableOpacity style={styles.userLogout} onPress={() => navigation.navigate('Login')}>
					<Text style={styles.userLogoutText}>Sair</Text>
					<Image style={styles.userLogoutImg} source={require('../../assets/images/logout2.png')} />
				</TouchableOpacity>
			</View>

			<Image style={styles.userAvatarImg} source={{ uri: `${githubUser.avatar_url}` }} />
			
			<View style={styles.userBio}>
				<View style={styles.square}></View>

				<Text style={styles.userName}>{githubUser.name}</Text>
				<Text style={styles.userLocation}>{githubUser.location}</Text>
			</View>

			<View style={styles.userInfo}>
				<UserInfo
					counter={githubUser.followers} description="Seguidores"
					onPress={() => navigation.navigate('Seguidores', {userFollowers: githubUser.followers_url, followersCount: githubUser.followers})} 
				/>
				<UserInfo
					counter={githubUser.following} description="Seguindo"
					onPress={() => navigation.navigate('Seguindo', {userFollwing: githubUser.login ,followingsCount: githubUser.following })} 
				/>
				<UserInfo 
					counter={githubUser.public_repos} description="Repositórios"
					onPress={() => navigation.navigate('Repos', {userRepos: githubUser.repos_url, repoCount: githubUser.public_repos})} 
				/>
			</View>

			<View style={styles.userBioContainer}>
				<View style={styles.square}></View>
				<Text style={styles.userBio}>BIO</Text>
				<Text style={styles.userBioInfo}>{githubUser.bio}
				</Text>	
			</View>
		</View>
	);
}
