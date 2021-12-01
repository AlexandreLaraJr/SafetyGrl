import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    titleButton: {
        //flex: 1,
        color: theme.colors.footer,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline',
    },
})