import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

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
	});

	return (
		<View style={{
			flex: 1,
			backgroundColor: '#292929'
		}}>
			<View style={{ backgroundColor: '#1F1F1F', flex: 0.40, width: 380, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingLeft: 10 }}>
				<Text style={{ color: '#ffffff' }}>@{githubUser.login}</Text>

				<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Login')}>
					<Text style={{ color: '#ffffff', paddingRight: 5 }}>Sair</Text>
					<Image style={{ width: 20, height: 20, marginRight: 50, resizeMode: 'contain' }} source={require('../../assets/images/logout2.png')} />
				</TouchableOpacity>
			</View>
			<Image style={{ width: 100, height: 100, marginRight: 50, borderRadius: 50, borderColor: '#ffffff', borderWidth: 2, top: -50, marginLeft: 130 }} source={{ uri: `${githubUser.avatar_url}` }} />
			<View style={{ flexDirection: 'column' }}>
				<View style={{ backgroundColor: '#FFCE00', height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 5 }}>

				</View>
				<Text style={{ color: '#ffffff', fontSize: 20, paddingLeft: 10, textTransform: 'uppercase', top: -24 }}>{githubUser.name}</Text>
				<Text style={{ color: '#ffffff', paddingLeft: 10, top: -20}}>{githubUser.location}</Text>
			</View>
			<View style={{ flexDirection: 'row', backgroundColor: '#383838', top: 30, height: 80}}>
				<View style={{ flexDirection: 'column'}}>
					<TouchableOpacity onPress={() => navigation.navigate('Seguidores', {imgAvatar: githubUser.avatar_url})}>
						<Text style={{ color: '#ffffff', fontSize: 40, paddingLeft: 20 }}>{githubUser.followers}</Text>
					</TouchableOpacity>
					<Text style={{ color: '#ffffff', fontSize: 10, paddingLeft: 20 }}>Seguidores</Text>
				</View>
				<View style={{ flexDirection: 'column' }}>
					<TouchableOpacity onPress={() => navigation.navigate('Tabs', {params: {imgAvatar: githubUser.avatar_url}, screen: 'Seguidores'})}>
						<Text style={{ color: '#ffffff', paddingLeft: 80, fontSize: 40 }}>{githubUser.following}</Text>
					</TouchableOpacity>
					<Text style={{ color: '#ffffff', fontSize: 10, paddingLeft: 85 }}>Seguindo</Text>
				</View>
				<View style={{ flexDirection: 'column' }}>
					<Text style={{ color: '#ffffff', paddingLeft: 80, fontSize: 40 }}>{githubUser.public_repos}</Text>
					<Text style={{ color: '#ffffff', fontSize: 10, paddingLeft: 80 }}>Repositórios</Text>
				</View>
			</View>

			<View style={{ flexDirection: 'column', top: 60}}>
				<View style={{ backgroundColor: '#FFCE00', height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 5 }}>

				</View>
				<Text style={{ color: '#ffffff', fontSize: 20, paddingLeft: 10, textTransform: 'uppercase', top: -24 }}>BIO</Text>
				<Text style={{ color: '#ffffff', paddingLeft: 10, top: -20}}>{githubUser.bio}</Text>
				
			</View>
		</View>
	);
}
