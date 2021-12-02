import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    containerLogin: {
        width: 115,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',        
    },
    titleLogin: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})
