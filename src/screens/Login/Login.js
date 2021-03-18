import React, {useState} from 'react';
import { View, TextInput, Image}from 'react-native';
import AppButton from '../../components/Buttom/Button';

export default function Login({navigation}) {

    const [textInputUser, setTextInputUser] = useState('');

    const checkTextInput = () => {
	if(!textInputUser.trim()) {
	    alert('Campo obrigatário');
	    return;
	}
    };
    
    return (
	<View style={{
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#292929'
	}}>
	    <Image style={{height: 140, width: 90, resizeMode: 'contain'}} source={require('../../assets/images/github.png')} />
	    <TextInput
		style={{backgroundColor: '#ffffff', height: 50, width: 310, borderWidth: 1, borderRadius: 8, paddingLeft: 10}}
		onChangeText={(value) => setTextInputUser(value)}
		value={textInputUser}
		placeholder="Usuário" />

	    <AppButton title="ENTRAR ➜" onPress={() => navigation.navigate('Tabs', {params: {user: textInputUser}, screen: 'Perfil'})} /> 
	</View>
    );
}
