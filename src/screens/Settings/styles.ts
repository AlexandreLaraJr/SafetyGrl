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
    marginTop: '30%',
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
    top: '7%',
    left: '4%',
    marginBottom: -5,

    
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    marginLeft: 10,
    
  },
  icon: {
    width: 35,
    height: 35,    
    
  },
  icon2: {
    width: 20,
    height: 20,
    left: "15%",

    
  },
  content2: {
    top: "6%",
    left: "8%", 
    marginTop:-10,
    marginBottom: 150,
    
    
  },
  contentItems: {
    width:  '85%',
    height: '6.5%',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 0.5,
    marginTop: '5%',
    marginBottom: '5%',
    
    
  },
  items: {
    fontSize: 16,
    marginLeft: '4%',
    fontWeight: "bold",    
    
  },
  contentItem2: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: '2%',
    marginRight: "15%",
    marginBottom: '-1%',
  },
  text: {
    fontSize: 15,
    marginBottom: '8%',

    
  },
  button: {
    width: 50,
    height: 30,
    borderRadius: 50,
    marginTop: '-1%',
    
  },
});
