import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        position: 'absolute',
        bottom: 50,
        right: 0
    },
    titleButton: {        
        color: theme.colors.footer,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
})