import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    repoContainer: {
        flexDirection: 'column',
        borderBottomColor: '#363636',
        borderBottomWidth: 1, 
        top: 20
    },
    square: {
        backgroundColor: '#FFCE00',
        top: 9, 
        height: 20, 
        borderTopRightRadius: 5, 
        borderBottomRightRadius: 5, 
        width: 5
    },
    repoName: {
        color: '#ffffff', 
        fontSize: 20, 
        paddingLeft: 10, 
        top: -24, 
        marginTop: 6
    },
    repoDescription: {
        color: '#ffffff', 
        paddingLeft: 10, 
        top: -20
    },
    repoInfo: {
        flexDirection: 'row', 
        bottom: 10
    },
    repoStarImg: {
        height: 20, 
        width: 40, 
        resizeMode: 'contain'
    },
    repoStartText: {
        color: '#ffffff', fontSize: 15
    },
    lockImg: {
        height: 20, 
        width: 40, 
        resizeMode: 'contain', 
        marginLeft: 190
    },
    unlockImg: {
        height: 20, 
        width: 40, 
        resizeMode: 'contain', 
        paddingLeft: 10
    }
});

export default styles;