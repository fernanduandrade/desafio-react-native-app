import React from 'react'; 
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native'

export default function Header({description, counter}) {

    const navigation = useNavigation();

    return (
        <View style={styles.banner}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.headerGoBack}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{counter} {description}</Text>
        </View>
    );

};