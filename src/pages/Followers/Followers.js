import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function Followers({route}) {

	const {imgAvatar} = route.params;

	console.log(imgAvatar);

    return (
	<View style={{
	    flex: 1,
	    backgroundColor: '#292929'
	}}>
		<View style={{ backgroundColor: '#1F1F1F', flex: 0.20, width: 400, flexDirection: 'row', justifyContent: 'flex-start'}}>
			<TouchableOpacity >
				<Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30, paddingLeft: 10}}>←</Text>
			</TouchableOpacity>
			<Text style={{color: "#FFFFFF", top: 15, paddingLeft: 90, fontWeight: 'bold'}}>10 seguidores</Text>
		</View>
		<View style={{ flexDirection: 'column',borderBottomColor: '#363636',borderBottomWidth: 1, top: 20}}>
			<View style={{ backgroundColor: '#FFCE00',top: 9, height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 5 }}>

			</View>
			<Image style={{ width: 100, height: 100, marginRight: 50, borderRadius: 50, borderColor: '#ffffff', borderWidth: 2, top: -50, marginLeft: 130 }} source={{ uri: `${imgAvatar}` }} />
			<Text style={{ color: '#ffffff', paddingLeft: 10, top: -20}}>repositio descriptionnn</Text>
			

		</View>

		

	</View>
    );
};

