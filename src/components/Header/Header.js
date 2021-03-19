import React from 'react'; 
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Header = ({description, counter}) => (
    <View style={styles.banner}>
        <TouchableOpacity >
            <Text style={styles.headerGoBack}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{counter} {description}</Text>
    </View>
)

export default Header;