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
        marginTop: 50,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 150,
        borderRadius: 8,
        alignItems: 'center',
    },
    contentTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 25,
        
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.title,
        paddingLeft: 20
    },
    iconStatement: {
        width: 35,
        height: 35,
        
    },
    contentStatement: {
        top: 40,
        marginHorizontal: 35
    },
    data:{
        marginTop: 20,
        fontSize: 16
    },
    inputData: {
        width: 270,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 0.5,
        marginTop: 18,
        paddingLeft: 5,        
    },
    subtitle: {
        marginTop: 10,
        fontSize: 14,
    },
    inputData2:{
        width: 270,
        height: 130,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 0.5,
        marginTop: 20,
        paddingLeft: 5,
    },
    statement: {
        color: 'white',
        marginTop: 20,
        marginHorizontal: -5,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        position: 'absolute', //deixa em cima ou em baixo
        bottom: 45,
        justifyContent: 'center',
        right: 20,       
    }

})