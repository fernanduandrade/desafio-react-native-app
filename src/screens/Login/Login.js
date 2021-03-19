import React, {useState} from 'react';
import { View, TextInput, Image} from 'react-native';
import AppButton from '../../components/Button/Button';

import styles from './styles';

export default function Login({navigation}) {

    const [textInputUser, setTextInputUser] = useState('');

    return (
		<View style={styles.container}>
			<Image style={styles.loginImg} source={require('../../assets/images/github.png')} />
			<TextInput
				style={styles.loginInput}
				onChangeText={(value) => setTextInputUser(value)}
				value={textInputUser}
				placeholder="Usuário" 
			/>

			<AppButton title="ENTRAR ➜" onPress={() => navigation.navigate('Tabs', {params: {userInput: textInputUser}, screen: 'Perfil'})} /> 
		</View>
    );
}
