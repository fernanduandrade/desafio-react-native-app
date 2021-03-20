import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileHeader: {
        backgroundColor: '#1F1F1F', 
        flex: 0.40, 
        width: 380, 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        paddingTop: 10, 
    },
    userLogin: {
        color: '#ffffff',
        marginRight: 40,
    },
    userSave: {
        flexDirection: 'row'
    },
    userSaveText: {
        color: '#ffffff', 
        paddingRight: 5
    },
    userSaveImg: {
        width: 20, 
        height: 20, 
        marginRight: 50, 
        resizeMode: 'contain'
    },
});

export default styles;