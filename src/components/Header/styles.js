import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    banner: {
        backgroundColor: '#1F1F1F', 
        width: 400, 
        flexDirection: 'row', 
        justifyContent: 'flex-start'
    },
    headerGoBack: {
        color: '#ffffff', 
        fontWeight: 'bold', 
        fontSize: 30, 
        paddingLeft: 10
    },
    headerTitle: {
        color: "#FFFFFF", 
        top: 15, 
        paddingLeft: 90, 
        fontWeight: 'bold'
    }
});

export default styles;