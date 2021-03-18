import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    followView: {
        flexDirection: 'row', 
        justifyContent: 'space-between' ,
        borderBottomColor: '#363636',
        borderBottomWidth: 1, 
        top: 10, 
        height: 70
    },
    square: {
        backgroundColor: '#FFCE00',
        top: 16, 
        height: 30, 
        borderTopRightRadius: 5, 
        borderBottomRightRadius: 5, 
        width: 7
    },
    avatarImg: {
        width: 50, 
        height: 50, 
        marginRight: 50, 
        borderRadius: 50, 
        borderColor: '#ffffff', 
        borderWidth: 2, top: 10
    },
    useLogin: {
        color: '#ffffff', 
        top: 10, 
        paddingRight: 10, 
        top: 20
    },
    nextUser: {
        color: '#ffffff', 
        top: 10, 
        marginLeft: 100, 
        top: 20
    }
});

export default styles;