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
        alignItems: 'center'
    },
    contentTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 25,
        left: -50,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.title,
        right: -10
    },
    iconUser: {
        width: 45,
    },
    contentDatas: {
        top: 60,   
    },
    datas: {
        color: theme.colors.blackopacity,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 15
    },
    contentPersonalDatas: {
        backgroundColor: theme.colors.datasBackgroung,
        width: 290,
        height: 35,
        borderRadius: 8,
        borderWidth: 0.5,
        marginBottom: 20, 
        justifyContent: 'center'
    },
    personalDatas: {
        fontSize: 15,
        padding: 5,
    },
    contentEdit: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 130,      
    },
    datasEdit: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: theme.colors.footer,
        fontWeight: '500',
    },
})