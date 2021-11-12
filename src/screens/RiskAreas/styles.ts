import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        height: 525,
        backgroundColor: theme.colors.secundaryBackgroung,
        borderRadius: 8,
        marginLeft: 35,
        marginRight: 35,
        alignItems: 'center',
        //justifyContent: 'space-between',
        marginTop: 25
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.title,
        top: 25,
    },
    contentSearch: {
        flexDirection: "row",
        top: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        width: 270,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 0.5,
        right: -8
    },
    rectSearch: {
        right: 20
    },
    iconSearch: {
        width: 20,
        height: 20,
    },
    subtitle: {
        top: 60,
        fontSize: 15,
    },
    textRegion: {
        position: "absolute",
        bottom: 40,
        fontSize: 15
    }
})