import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },

    inputLogin: {
        width: 160,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        marginTop: '5%',
        marginBottom: '5%',
    },

    image: {
        //marginTop: '20%',
        width: 250,
        height:250
    },

    content: {
        marginTop: 50,
        paddingHorizontal: 60
    },

    title: { 
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginTop: -30,
    },

    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        paddingBottom: 30
    }
})