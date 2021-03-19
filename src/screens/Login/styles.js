import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292929'
    },
    loginImg: {
        height: 140, 
        width: 90, 
        resizeMode: 'contain'
    },
    loginInput: {
        backgroundColor: '#ffffff', 
        height: 50, 
        width: 310, 
        borderWidth: 1, 
        borderRadius: 8, 
        paddingLeft: 10
    }
});

export default styles;