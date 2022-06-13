import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
        marginLeft: '20%',
        marginRight: '20%',
        width: 120, 
        height: 40,
        borderRadius: 8,
        backgroundColor: theme.colors.primary,

        
    },
    titleButton: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        
        marginTop: '10%' ,
    },
})