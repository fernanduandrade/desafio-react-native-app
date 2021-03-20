import React, {useContext} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import GithubUserContext from '../../context/GithubUserContext';

import styles from './styles';

function SaveUser(props) {

	const {setLoggedUser} = useContext(GithubUserContext);

	return (
	    <View style={styles.profileHeader}>
	        <Text style={styles.userLogin}>#{props.githubUserLogin}</Text>

	        <TouchableOpacity style={styles.userSave} onPress={() => setLoggedUser(props.githubUserLogin)}>
	            <Text style={styles.userSaveText}>Salvar</Text>
	            <Image style={styles.userSaveImg} source={require('../../assets/images/save.png')} />
	        </TouchableOpacity>
	    </View>
    )
};

export default SaveUser;