import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },

    image: {
        marginTop: -50,
        marginBottom: 10,
        width: '60%',
        height: '30%',
        
    },

    nameLogo: {
        width: '55%',
        height: '6%',
        marginBottom: '10%',
    },

    content: {
        paddingHorizontal: '1%',
    },

    inputLogin: {
        width: 210,
        height: 40,
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 0.5,
        marginBottom: 6,
        padding: 5,
    },

    forgotPassword: {
        color: theme.colors.primary,
        textDecorationLine: 'underline',
        left: '27%',
        paddingBottom: '2%',
        fontWeight: "bold"
    },

    containerIcons: {
        flexDirection: 'row',
        top: 70,
    }
})