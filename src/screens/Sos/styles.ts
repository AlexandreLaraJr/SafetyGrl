import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    content: {
        backgroundColor: theme.colors.secundaryBackgroung,
        flex: 1,
        marginTop: '30%',
        marginLeft: "8%",
        marginRight: "8%",
        marginBottom: "26%",
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: theme.colors.footer,
        
    },
    contentTitle: {        
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: '10%',
        
        
    },
    text:{
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        marginTop: '40%',
        marginLeft: '20%',
        marginRight: '20%',
        fontWeight: 'bold'
        // marginBottom: '0%'
        
        
    },
    callButton:{
        marginTop: '30%',
        marginBottom: '20%',
        width: 150,
        height: 35,
        borderRadius: 6,
        backgroundColor: theme.colors.primary,
        
    }
})