import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const UserInfo = ({onPress, counter, description}) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.userCounter}>{counter}</Text>
        </TouchableOpacity>

        <Text style={styles.userDescription}>{description}</Text>
    </View>

);

export default UserInfo;