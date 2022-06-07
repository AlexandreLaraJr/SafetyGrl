import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },
    content: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 62,
    },
    logo: {
        width: 46,
        height: 46,
        marginRight: 9
    },
    nameLogo: {
        width: 125,
        height: 30
    },
    content2: {
        flex: 1,
        marginTop: 10,
    },
    NameData: {
        marginTop: 10,
        marginBottom: 5,
        color: theme.colors.blackopacity,
    },
    inputData: {
        width: 300,
        height: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        marginTop: 3,
    },   

})