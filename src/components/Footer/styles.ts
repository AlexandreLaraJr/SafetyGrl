import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    footer: {
        backgroundColor: theme.colors.footer,
        width: '100%',
        height: 55,
        position: 'absolute', //deixa em cima ou em baixo
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    rectConfig: {
        left: 40,
    },
    iconConfig: {
        width: 35,
        height: 35,
    },
    buttonSOS: {
        backgroundColor: 'white',
        width:70,
        height:70,
        borderRadius:35,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20
    },
    iconSOS: {
        width: 48,
        height: 40,
    },
    rectBell: {
        right: 40,
    },
    iconBell: {
        width: 30,
        height: 30,
    },
})