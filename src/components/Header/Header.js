import React from 'react'; 
import styles from './styles';

const Header = props => (
    <View style={styles.container}>
        <TouchableOpacity >
            <Text style={styles.headerGoBack}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{props.repoDescription}</Text>
    </View>
)

export default Header;