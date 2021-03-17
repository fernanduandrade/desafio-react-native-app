import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default function Following({route}) {

	const {userFollwing} = route.params;
	const {followingsCount} = route.params;

	console.log(userFollwing);

	const [following, setFollowing] = useState([])

	useEffect(() => {
		async function loadFollowingUsers() {
			try {
				const result = await axios.get(`https://api.github.com/users/${userFollwing}/following`);
				setFollowing(result.data);

			} catch (err) {
				console.log(err);
			}
		};
		loadFollowingUsers();
	}, []);

    return (
	<View style={{
	    flex: 1,
	    backgroundColor: '#292929'
	}}>
		<View style={{ backgroundColor: '#1F1F1F', width: 400, flexDirection: 'row', justifyContent: 'flex-start'}}>
			<TouchableOpacity >
				<Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30, paddingLeft: 10}}>←</Text>
			</TouchableOpacity>
			<Text style={{color: "#FFFFFF", top: 15, paddingLeft: 90, fontWeight: 'bold'}}>Seguindo {followingsCount}</Text>
		</View>
		

		{following.map((following) => (
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' ,borderBottomColor: '#363636',borderBottomWidth: 1, top: 10, height: 70}} key={following.id}>
			<View style={{ backgroundColor: '#FFCE00',top: 16, height: 30, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 7 }}>

			</View>
			<Image style={{ width: 50, height: 50, marginRight: 50, borderRadius: 50, borderColor: '#ffffff', borderWidth: 2, top: 10}} source={{ uri: `${following.avatar_url}` }} />
			<Text style={{ color: '#ffffff', top: 10, paddingRight: 10, top: 20}}>@{following.login}</Text>
			<Text style={{ color: '#ffffff', top: 10, marginLeft: 100, top: 20}}>➜</Text>
			

		</View>
		
		))}

		

		

	</View>
    );
};

