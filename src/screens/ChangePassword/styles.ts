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
        marginTop: '30%',
        marginLeft: "8%",
        marginRight: "8%",
        marginBottom: "5%",
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: theme.colors.footer,
      },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: theme.colors.title,
        marginTop: '5%',
        right: '24%',

        
        
    },
    content2: {
        paddingTop: "5%",     
        top: '4%'
    },
    items: {
        fontSize: 15,
        marginBottom:'1%',
        fontWeight: "bold",

        marginTop: '3%',
        
    },
    input: {
        backgroundColor: 'white',
        width: 290,
        height: 35,
        borderRadius: 8,
        borderWidth: 0.5,
        marginTop: '3%',
        marginBottom: '1%',
        justifyContent: "center",
    },    
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '30%' ,
    },
    
})