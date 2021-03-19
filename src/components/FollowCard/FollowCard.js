import React from 'react';
import {Image, View, Text} from 'react-native';

import styles from './styles';

const FollowCard = props => (

    <View style={styles.followView}>
        <View style={styles.square}>

        </View>
        <View style={styles.rowContainer}>
            <Image style={styles.avatarImg} source={{ uri: `${props.avatarUrl}` }} />
            <Text style={styles.useLogin}>{props.useLogin}</Text>
            <Text style={styles.nextUser}>➜</Text>
        </View>

    </View>
);

export default FollowCard;