import { setStatusBarBackgroundColor } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    content: {
        backgroundColor: theme.colors.secundaryBackgroung,
        flex: 1,
        marginTop: 100,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 200,
        borderRadius: 8,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.title,
        top: 30
    },
    content2: {
        paddingTop: 70       
    },
    items: {
        fontSize: 15,
    },
    input: {
        width: 280,
        height: 25,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        padding: 5,
        marginTop: 15,
        marginBottom: 20,
    },    
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: -30 
    },
    
})