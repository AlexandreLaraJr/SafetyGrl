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
        borderWidth: 2
    },

    title: {
        flex: 1,
        color: 'black',
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
    }
})
