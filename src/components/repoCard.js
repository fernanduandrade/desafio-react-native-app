import React from 'react';
import {View, Image, Text} from 'react-native';

const RepoCard = props => (

	<View style={{ flexDirection: 'column',borderBottomColor: '#363636',borderBottomWidth: 1, top: 20}} >
		<View style={{ backgroundColor: '#FFCE00',top: 9, height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 5 }}>

		</View>
		<Text style={{ color: '#ffffff', fontSize: 20, paddingLeft: 10, top: -24, marginTop: 6 }}>{props.repoName}</Text>
		<Text style={{ color: '#ffffff', paddingLeft: 10, top: -20}}>{props.Repodescription}</Text>
		
		<View style={{flexDirection: 'row', bottom: 10}}>
			<Image style={{height: 20, width: 40, resizeMode: 'contain'}} source={require('../assets/images/star2.png')} />
			<Text style={{ color: '#ffffff', fontSize: 15}}>{props.repoStars}</Text>

			<Image style={{height: 20, width: 40, resizeMode: 'contain', marginLeft: 190}} source={require('../assets/images/lock2.png')} />
			<Image style={{height: 20, width: 40, resizeMode: 'contain', paddingLeft: 10}} source={require('../assets/images/lock3.png')} />
		</View>

	</View>

)



export default RepoCard;