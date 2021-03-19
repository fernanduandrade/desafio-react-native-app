import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929'
    },
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
    userAvatarImg: {
        width: 100, 
        height: 100, 
        marginRight: 50, 
        borderRadius: 50, 
        borderColor: '#ffffff', 
        borderWidth: 2, 
        top: -50, 
        marginLeft: 130
    },
    userDescription: {
        flexDirection: 'column'
    },
    square: {
        backgroundColor: '#FFCE00', 
        height: 20, 
        borderTopRightRadius: 5, 
        borderBottomRightRadius: 5, 
        width: 5
    },
    userName: {
        color: '#ffffff', 
        fontSize: 20, 
        paddingLeft: 10, 
        textTransform: 'uppercase', 
        top: -24
    },
    userLocation: {
        color: '#AFAFAF', 
        paddingLeft: 10, 
        top: -20
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        backgroundColor: '#383838', 
        top: 30, 
        height: 80
    },
    userBioContainer: {
        flexDirection: 'column',
        top: 60
    },
    userBio: {
        color: '#ffffff', 
        fontSize: 20, 
        paddingLeft: 10, 
        textTransform: 'uppercase', 
        top: -24
    },
    userBioInfo: {
        color: '#AFAFAF', 
        paddingLeft: 10, 
        top: -20
    }

    
});

export default styles;