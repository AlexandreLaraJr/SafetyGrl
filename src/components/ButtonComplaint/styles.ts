import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 45,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold' 
    },
})