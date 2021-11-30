import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    rectUser: {
        marginLeft: 20,
    },
    iconUser: {
        width: 40,
        height: 40,
        //backgroundColor: 'white'
    },
    contentIconAlert: {
        width:70,
        height: 50,
        backgroundColor: theme.colors.footer,
        borderRadius: 8,
        marginRight: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconComplaint: {
        width: 32,
        height: 32,
    },
    icon: {
        width: 32,
        height: 32,
        //marginLeft: -20,
    },
    contentBack: {
        marginLeft: -55,
    },
    contentIconDepoiment: {
        width:70,
        height: 50,
        backgroundColor: theme.colors.footer,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    

})