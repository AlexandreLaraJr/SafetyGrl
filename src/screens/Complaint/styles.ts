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
    borderColor: theme.colors.footer
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    top: '5%',
    left: '5%',
    marginBottom: -10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    left: '50%',
    
  },
  iconAlert: {
    width: 40,
    height: 40,
  },
  content2: {
    top: '5%',
    left: '8%',
    right: '8%',
    marginTop: 10,
    marginBottom: 200,
    
  },
  content3: {
    flexDirection: "row",
    marginTop: '-2%',
    marginBottom: '-2%',
  },

  content5: {
    right: '45%',   
  },  
  contentItems: {
    flexDirection: "row",
    marginTop: '1%',
  },
  items: {
    fontSize: 15,
  },
  textRed: {
    fontSize: 16,
    color: "red",
  },
  input: {
    flex: 0,
    width: '83%',
    height: '80%',    
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 5,    
  },
  contentIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: '5%',
    
  },
  inputHalf: {
    width: '59%',
    height: '60%',
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 5,
    marginBottom: '5%',
  },
  icon: {
    width: 15,
    height: 15,
    left: '-65%'
  },
  content4: {
    //left: 25
    
  },
  title2: {
    fontSize: 16,
    fontWeight: "bold",
    right: -2,
    marginTop: '2%',
    marginBottom: '4%',
    
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: '-20%',
    right: "6%"
  },
  
});
