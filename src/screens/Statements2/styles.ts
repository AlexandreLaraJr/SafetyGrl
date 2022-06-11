import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    backgroundColor: theme.colors.secundaryBackgroung,
    flex: 1, 
    marginTop: '30%',
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "26%",
    borderRadius: 8,
    alignItems: "center",    
    borderWidth: 2,
    borderColor: theme.colors.footer,
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: '10%',
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    paddingLeft: '6%',
    
  },
  iconStatement: {
    width: 35,
    height: 35,
  },
  contentStatement: {
    marginTop: '15%',
    marginBottom: '50%',
    marginHorizontal: '10%',
    
    
  },
  data: {
    marginTop: '5%',
    fontSize: 16,
  },
  inputData: {
    width: '100%',
    height: '100%',
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 0.5,
    marginTop: 18,
    paddingLeft: 5,
    
  },
  subtitle: {
    marginTop: 15,
    fontSize: 15,
    textAlign: "center",

  },
  inputData2: {
    width: 270,
    height: 130,
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 0.5,
    marginTop: 20,
    paddingLeft: 5,

    
    
  },
  statement: {
    color: "black",
    marginTop: '5%',
    marginHorizontal: -5,
    textAlign: "center",
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%'

  },
  buttons: {
    flexDirection: "row",
    position: "absolute", //deixa em cima ou em baixo
    bottom: '10%',
    justifyContent: "center",
    // right: 20,

  },

});
