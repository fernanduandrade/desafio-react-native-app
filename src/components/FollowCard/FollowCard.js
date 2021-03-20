import React, {useContext} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';

import GithubUserContext from '../../context/GithubUserContext';

export default function FollowCard(props) {

    const navigation = useNavigation();

    const {setTextInputUser} = useContext(GithubUserContext);

    return (
        <View style={styles.followView}>
                
                <View style={styles.square}></View>
                <TouchableOpacity onPress={() => navigation.push('Tabs', setTextInputUser(props.useLogin))}> 
                    <View style={styles.rowContainer}>
                        <Image style={styles.avatarImg} source={{ uri: `${props.avatarUrl}` }} />
                        <Text style={styles.useLogin}>{props.useLogin}</Text>
                        <Text style={styles.nextUser}>➜</Text>
                    </View>

                </TouchableOpacity>
        </View>
    );
};