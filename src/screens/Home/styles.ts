import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: 50,
  },
  content: {
    height: 50,
    flexDirection: "row",
    backgroundColor: theme.colors.secundaryBackgroung,
    borderRadius: 8,
    marginLeft: 35,
    marginRight: 35,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },

  textName: {
    fontSize: 18,
    fontWeight: "bold",
    left: '-150%',
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
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: '5%',
    borderRadius: 8,
    //alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    alignSelf: 'center',
    top: '8%',
  },
  contentSearch: {
    flexDirection: "row",
    top: '17%',
    alignItems: "center",
    alignSelf: 'center',
    marginBottom: 60,    
  },
  search: {
    width: '85%',
    height: 25,
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 0.5,
    paddingLeft: '1%',
    left: '40%'
  },
  iconSearch: {
    width: 20,
    height: 20,
    right: '40%'
  },
  subtitle: {
    top: 60,
    fontSize: 15,
  },
  textNameRegiao: {
    fontSize: 14,
    marginTop: '3%',
    marginBottom: 25,
    alignSelf: 'center'
  },
  subContent2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: 'center',
    marginBottom: 150, 
  },
  icon: {
    width: 32,
    height: 32,
  },
  contentIconDepoiment: {
    width: 70,
    height: 50,
    backgroundColor: theme.colors.footer,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
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
    width: Dimensions.get("window").width / 1.3,
    height: Dimensions.get("window").height / 3,
    borderRadius: 4,
    borderWidth: 1,
    overflow: "hidden",
  },
  buttonText: {
    //fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 10,
  },
});
