import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
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
    iconUser: {
        width: 40,
        height: 40,
        marginLeft: 20
    },
    textName: {
        fontSize: 18,
        fontWeight: 'bold',
        left: -60
    },
    iconOff: {
        width: 25,
        height: 25,
        right: 20
    },
    content2: {
        height: 400,
        backgroundColor: theme.colors.secundaryBackgroung,
        borderRadius: 8,
        marginLeft: 35,
        marginRight: 35,
        alignItems: 'center',
        //justifyContent: 'space-between',
        marginTop: 25
    },
    textNameRegiao: {
        fontSize: 15,
        marginTop: 20,
    },
    subContent2:{
        flexDirection:'row',  
        justifyContent: 'space-between',  
        backgroundColor: theme.colors.footer,
        borderRadius: 8,
        //alignItems:'center'   
    },
    contentIconAlert: {

    },
    icon: {

    },
    contentIconDepoiment: {
        
    }

})