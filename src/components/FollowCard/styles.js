import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    followView: {
        flexDirection: 'row', 
        justifyContent: 'flex-start' ,
        borderBottomColor: '#363636',
        borderBottomWidth: 1, 
        top: 10, 
        height: 80, 
    },
    square: {
        backgroundColor: '#FFCE00',
        top: 25, 
        height: 30, 
        borderTopRightRadius: 5, 
        borderBottomRightRadius: 5, 
        width: 7,
        marginRight: 20
    },
    rowContainer : {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatarImg: {
        width: 60, 
        height: 60,  
        borderRadius: 50, 
        borderColor: '#ffffff', 
        borderWidth: 2, 
        top: 10,

    },
    useLogin: {
        color: '#ffffff',
        top: 30
    },
    nextUser: {
        color: '#ffffff',
        top: 30
    }
});

export default styles;