import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileHeader: {
        backgroundColor: '#1F1F1F', 
        flex: 0.40, 
        width: 380, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 10, 
        paddingLeft: 10
    },
    userLogin: {
        color: '#ffffff',
    },
    userLogout: {
        flexDirection: 'row'
    },
    userLogoutText: {
        color: '#ffffff', 
        paddingRight: 5
    },
    userLogoutImg: {
        width: 20, 
        height: 20, 
        marginRight: 50, 
        resizeMode: 'contain'
    },
});

export default styles;