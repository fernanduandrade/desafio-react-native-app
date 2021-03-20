import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const LoggedUser = (props) => {

	const navigation = useNavigation();

	return (
	    <View style={styles.profileHeader}>
	        <Text style={styles.userLogin}>@{props.githubUserLogin}</Text>

	        <TouchableOpacity style={styles.userLogout} onPress={() => navigation.navigate('Login')}>
	            <Text style={styles.userLogoutText}>Sair</Text>
	            <Image style={styles.userLogoutImg} source={require('../../assets/images/logout2.png')} />
	        </TouchableOpacity>
	    </View>
    );
};

export default LoggedUser;