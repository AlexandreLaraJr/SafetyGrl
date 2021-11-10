import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    containerLogin: {
        width: 115,
        height: 40,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        top: 30
        //shadowColor: theme.colors.primary,
    },
    titleLogin: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    containerCriarConta: {
        //width: 120,
        //height: 40,
        //backgroundColor: theme.colors.primary,
        //borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row', 
        top: 45  
        //shadowColor: theme.colors.primary
    },
    titleCriarConta: {
        color: theme.colors.primary,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline'
    },
    
    iconWrapperFacebook: {
        width: 30,
        height: 30,
        paddingRight: 50
    },

    iconWrapperGoogle: {
        width: 30,
        height: 30
    },

    icon: { 
        width: 30,
        height: 30
    },

})
