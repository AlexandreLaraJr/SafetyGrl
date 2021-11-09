import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 40,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        //shadowColor: theme.colors.primary,
    },

    title: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    
    containerFacebook: {
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
        top: 30,
        left: 100
    },
    iconWrapperFacebook: {
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
    },

    containerGoogle: {
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
        right: 100
    },

    iconWrapperGoogle: {
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
    },

    icon: { 
        width: 30,
        height: 30
    },

    containerCriarConta: {
        width: 200,
        height: 40,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row', 
        marginBottom: 120    
        //shadowColor: theme.colors.primary,
    },
    titleCriarConta: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
})
