import { setStatusBarBackgroundColor } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    backgroundColor: theme.colors.secundaryBackgroung,
    flex: 1,
    marginTop: "30%",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "26%",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.footer,
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: "5%",
    left: "-10%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    right: "-1%",
  },
  iconUser: {
    width: 45,
  },
  contentDatas: {
    top: "10%",
    marginLeft: '8%'
    
  },
  datas: {
    color: theme.colors.blackopacity,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "1%",
    marginBottom: "4%",
  },
  contentPersonalDatas: {
    backgroundColor: "white",
    width: 290,
    height: 35,
    borderRadius: 8,
    borderWidth: 0.5,
    marginBottom: "1%",
    justifyContent: "center",
  },
  personalDatas: {
    color: "black",
    fontSize: 15,
    padding: 5,
    opacity: 0.4,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "30%",
  },

  contentEdit: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "30%",
    //marginRight: "10%",

    
  },
  datasEdit: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
