import React, {useContext} from 'react';
import { View, Image} from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import AppButton from '../../components/Button/Button';
import GithubUserContext from '../../context/GithubUserContext';

import styles from './styles';

export default function Login({navigation}) {

    const {textInputUser, setTextInputUser, setLoggedUser} = useContext(GithubUserContext);
    
    const hasErrors = () => {
    	return !textInputUser;
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
			<HelperText style={styles.requiredInput} type="error" visible={hasErrors()}>Campo obrigatório!</HelperText>

			<AppButton title="ENTRAR ➜" disabled={!textInputUser} onPress={() => navigation.navigate('Tabs', setLoggedUser(textInputUser),{screen: 'Perfil'})} /> 
		</View>
    );
}
