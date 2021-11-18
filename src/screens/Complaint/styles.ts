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
        left: -40,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.title,
        right: -30
    },
    iconAlert: {
        width: 40,
        height: 40,
    },
    content2: {
        //left: -70,
        top: 60,
    },
    content3: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentItems: {
        flexDirection: 'row',
    },
    items: {
        fontSize: 15,
    },
    textRed: {
        fontSize: 16,
        color: 'red',
        right: -5
    },
    input: {
        width: 280,
        height: 25,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        top: 10,
        marginBottom: 30,
    },
    contentIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputHalf: {
        width: 120,
        height: 25,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        top: 10,
        marginBottom: 20,
    },
    icon: {
        width: 15,
        height: 15,
        right: 20
    },
    content4: {
        left: 25
    }

})