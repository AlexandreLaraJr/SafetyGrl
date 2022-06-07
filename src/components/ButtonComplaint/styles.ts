import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    button: {
        width: 95,
        height: 45,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: '3%'
    },
    textOk: {
        flex: 0,
        color: 'white',
        fontSize: 15,
        marginLeft: 37,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold' ,
        
    },
    textCancel: {
        flex: 0,
        color: 'white',
        fontSize: 15,
        marginLeft: 8, 
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold' ,
        
    },
})