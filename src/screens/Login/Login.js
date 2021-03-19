import React, {useState} from 'react';
import { View, TextInput, Image} from 'react-native';
import AppButton from '../../components/Button/Button';

import styles from './styles';

export default function Login({navigation}) {

    const [textInputUser, setTextInputUser] = useState('');

    const checkTextInput = () => {
	if(!textInputUser.trim()) {
	    alert('Campo obrigatário');
	    return;
	}
    };
    
    return (
		<View style={styles.container}>
			<Image style={styles.loginImg} source={require('../../assets/images/github.png')} />
			<TextInput
				style={styles.loginInput}
				onChangeText={(value) => setTextInputUser(value)}
				value={textInputUser}
				placeholder="Usuário" 
			/>

			<AppButton title="ENTRAR ➜" onPress={() => navigation.navigate('Tabs', {params: {user: textInputUser}, screen: 'Perfil'})} /> 
		</View>
    );
}
