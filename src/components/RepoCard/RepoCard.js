import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

const RepoCard = props => (

	<View style={styles.repoContainer} >
		<View style={styles.square}>
		</View>

		<Text style={styles.repoName}>{props.repoName}</Text>
		<Text style={styles.repoDescription}>{props.Repodescription}</Text>
		
		<View style={styles.repoInfo}>
			<Image style={styles.repoStarImg} source={require('../../assets/images/star2.png')} />
			<Text style={styles.repoStartText}>{props.repoStars}</Text>

			<Image style={styles.lockImg} source={require('../../assets/images/lock2.png')} />
			<Image style={styles.unlockImg} source={require('../../assets/images/lock3.png')} />
		</View>

	</View>

)



export default RepoCard;