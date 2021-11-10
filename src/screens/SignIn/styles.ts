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

    image: {
        marginTop: -50,
        marginBottom: 10,
        width: 230,
        height:230,
    },

    nameLogo: {
        width: 205,
        height: 48,
        marginBottom: 40
    },

    content: {
        paddingHorizontal: 60
    },
    inputLogin: {
        width: 210,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 0.5,
        marginBottom: 10,
    },

    containerIcons: {
        flexDirection: 'row',
        top: 60,
    }
})