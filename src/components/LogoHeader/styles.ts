import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 55,  
    
    },
    containerLogo:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    logo: {
        width: 80,
        height: 80,
       
    },
    nameLogo: {
        width: 170,
        height: 40,
    }
})