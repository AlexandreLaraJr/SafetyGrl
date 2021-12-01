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
        marginTop: 24,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 70,
        borderRadius: 8,
        alignItems: 'center',
    },
    contentTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 25,
        left: -40,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.title,
        marginLeft: 10,
    },
    iconAlert: {
        width: 40,
        height: 40,
    },
    icon2:{
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    content2: {
        top: 35,        
    },
    contentItems: {
        width: 300,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 6,        
        borderWidth: 0.5,
        marginTop: 15,
        marginBottom: 15,
    },
    items: {
        fontSize: 16,
        marginLeft: 8,
        fontWeight: 'bold'
    },    
    text: {
        fontSize: 15,
        marginBottom: 13,
        marginLeft: 3,
    }

})