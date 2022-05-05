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
    marginTop: '5%',
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "5%",
    borderRadius: 8, 
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    top: '5%',
    left: '5%',
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    left: '20%',
  },
  iconAlert: {
    width: 40,
    height: 40,
  },
  content2: {
    top: '5%',
    left: '8%',
    right: '8%',
    marginBottom: 200,
  },
  content3: {
    flexDirection: "row",
  },
  content5: {
    right: '45%'
  },  
  contentItems: {
    flexDirection: "row",
    marginTop: 7,
    marginBottom: 7,
  },
  items: {
    fontSize: 15,
  },
  textRed: {
    fontSize: 16,
    color: "red",
    //right: -5,
  },
  input: {
    width: '83%',
    height: 25,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 5,
  },
  contentIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    top: 8,
  },
  inputHalf: {
    width: '58%',
    height: 25,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 5,
  },
  icon: {
    width: 15,
    height: 15,
    left: '-85%'
  },
  content4: {
    //left: 25
  },
  title2: {
    fontSize: 16,
    fontWeight: "bold",
    right: -2,
    marginTop: 12,
    marginBottom: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: -50,
    right: "6%"
  },
  
});
