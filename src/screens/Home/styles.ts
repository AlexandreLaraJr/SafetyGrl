import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: theme.colors.secundaryBackgroung,
        borderRadius: 8,
        marginLeft: 35,
        marginRight: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25
    },
    
    textName: {
        fontSize: 18,
        fontWeight: 'bold',
        left: -50
    },
    rectOff: {
        marginRight: 20,
    },
    iconOff: {
        width: 25,
        height: 25,
    },
    content2: {
        backgroundColor: theme.colors.secundaryBackgroung,
        flex: 1,
        marginTop: 24,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: -50,
        borderRadius: 8,
        alignItems: 'center',
    },
    textNameRegiao: {
        fontSize: 15,
        marginTop: 20,
    },
    subContent2:{
        flexDirection:'row',  
        justifyContent: 'space-between',  
        marginTop: 280,
    },
    icon: {
        width: 32,
        height: 32,
    },
    contentIconDepoiment: {
        width:70,
        height: 50,
        backgroundColor: theme.colors.footer,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectMaps: {
        backgroundColor: "#D4AB8E",
        marginTop: 20,
        width: 200,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
    },
    map: {
        width: Dimensions.get('window').width/1.3,
        height: Dimensions.get('window').height/3,
        borderRadius: 4, 
        borderWidth: 1,
        overflow: 'hidden',
    },
    buttonText: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 10
    }
})