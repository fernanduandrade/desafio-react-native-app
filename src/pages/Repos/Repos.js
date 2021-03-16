import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function Repos({}) {
    return (
	<View style={{
	    flex: 1,
	    backgroundColor: '#292929'
	}}>
		<View style={{ backgroundColor: '#1F1F1F', flex: 0.45, width: 400, flexDirection: 'row', justifyContent: 'flex-start'}}>
			<TouchableOpacity >
				<Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30, paddingLeft: 10}}>←</Text>
			</TouchableOpacity>
			<Text style={{color: "#FFFFFF", top: 15, paddingLeft: 90, fontWeight: 'bold'}}>10 repositórios</Text>
		</View>
		<View style={{ flexDirection: 'column',borderBottomColor: '#363636',borderBottomWidth: 1, top: 20}}>
			<View style={{ backgroundColor: '#FFCE00',top: 9, height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 5 }}>

			</View>
			<Text style={{ color: '#ffffff', fontSize: 20, paddingLeft: 10, top: -24, marginTop: 6 }}>REPOSITORIO</Text>
			<Text style={{ color: '#ffffff', paddingLeft: 10, top: -20}}>repositio description</Text>
			<View style={{flexDirection: 'row', bottom: 10}}>
				<Image style={{height: 20, width: 40, resizeMode: 'contain'}} source={require('../../assets/images/star2.png')} />
				<Text style={{ color: '#ffffff', fontSize: 15}}>22</Text>

				<Image style={{height: 20, width: 40, resizeMode: 'contain', marginLeft: 190}} source={require('../../assets/images/lock2.png')} />
				<Image style={{height: 20, width: 40, resizeMode: 'contain', paddingLeft: 10}} source={require('../../assets/images/lock3.png')} />
			</View>

		</View>

		<View style={{ flexDirection: 'column',borderBottomColor: '#363636',borderBottomWidth: 1, top: 20}}>
			<View style={{ backgroundColor: '#FFCE00',top: 9, height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 5 }}>

			</View>
			<Text style={{ color: '#ffffff', fontSize: 20, paddingLeft: 10, top: -24, marginTop: 6 }}>REPOSITORIO</Text>
			<Text style={{ color: '#ffffff', paddingLeft: 10, top: -20}}>repositio description</Text>
			<View style={{flexDirection: 'row', bottom: 10}}>
				<Image style={{height: 20, width: 40, resizeMode: 'contain'}} source={require('../../assets/images/star2.png')} />
				<Text style={{ color: '#ffffff', fontSize: 15}}>22</Text>

				<Image style={{height: 20, width: 40, resizeMode: 'contain', marginLeft: 190}} source={require('../../assets/images/lock2.png')} />
				<Image style={{height: 20, width: 40, resizeMode: 'contain', paddingLeft: 10}} source={require('../../assets/images/lock3.png')} />
			</View>

		</View>

		<View style={{ flexDirection: 'column',borderBottomColor: '#363636',borderBottomWidth: 1, top: 20}}>
			<View style={{ backgroundColor: '#FFCE00',top: 9, height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 5 }}>

			</View>
			<Text style={{ color: '#ffffff', fontSize: 20, paddingLeft: 10, top: -24, marginTop: 6 }}>REPOSITORIO</Text>
			<Text style={{ color: '#ffffff', paddingLeft: 10, top: -20}}>repositio description</Text>
			<View style={{flexDirection: 'row', bottom: 10}}>
				<Image style={{height: 20, width: 40, resizeMode: 'contain'}} source={require('../../assets/images/star2.png')} />
				<Text style={{ color: '#ffffff', fontSize: 15}}>22</Text>

				<Image style={{height: 20, width: 40, resizeMode: 'contain', marginLeft: 190}} source={require('../../assets/images/lock2.png')} />
				<Image style={{height: 20, width: 40, resizeMode: 'contain', paddingLeft: 10}} source={require('../../assets/images/lock3.png')} />
			</View>

		</View>

		<View style={{ flexDirection: 'column',borderBottomColor: '#363636',borderBottomWidth: 1, top: 20}}>
			<View style={{ backgroundColor: '#FFCE00',top: 9, height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 5 }}>

			</View>
			<Text style={{ color: '#ffffff', fontSize: 20, paddingLeft: 10, top: -24, marginTop: 6 }}>REPOSITORIO</Text>
			<Text style={{ color: '#ffffff', paddingLeft: 10, top: -20}}>repositio description</Text>
			<View style={{flexDirection: 'row', bottom: 10}}>
				<Image style={{height: 20, width: 40, resizeMode: 'contain'}} source={require('../../assets/images/star2.png')} />
				<Text style={{ color: '#ffffff', fontSize: 15}}>22</Text>

				<Image style={{height: 20, width: 40, resizeMode: 'contain', marginLeft: 190}} source={require('../../assets/images/lock2.png')} />
				<Image style={{height: 20, width: 40, resizeMode: 'contain', paddingLeft: 10}} source={require('../../assets/images/lock3.png')} />
			</View>

		</View>

		<View style={{ flexDirection: 'column',borderBottomColor: '#363636',borderBottomWidth: 1, top: 20}}>
			<View style={{ backgroundColor: '#FFCE00',top: 9, height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 5 }}>

			</View>
			<Text style={{ color: '#ffffff', fontSize: 20, paddingLeft: 10, top: -24, marginTop: 6 }}>REPOSITORIO</Text>
			<Text style={{ color: '#ffffff', paddingLeft: 10, top: -20}}>repositio description</Text>
			<View style={{flexDirection: 'row', bottom: 10}}>
				<Image style={{height: 20, width: 40, resizeMode: 'contain'}} source={require('../../assets/images/star2.png')} />
				<Text style={{ color: '#ffffff', fontSize: 15}}>22</Text>

				<Image style={{height: 20, width: 40, resizeMode: 'contain', marginLeft: 190}} source={require('../../assets/images/lock2.png')} />
				<Image style={{height: 20, width: 40, resizeMode: 'contain', paddingLeft: 10}} source={require('../../assets/images/lock3.png')} />
			</View>

		</View>

	</View>
    );
};

