import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    containerCreateAccountConfirm: {
        width: 200,
        height: 40,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute', //deixa em cima ou em baixo
        bottom: '10%',
        alignSelf: 'center'
        //shadowColor: theme.colors.primary,
    },
    titleCriarContaConfirm: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        height: '50%'
    },
})