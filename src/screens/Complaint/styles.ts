import { setStatusBarBackgroundColor } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: 20,
  },
  content: {
    backgroundColor: theme.colors.secundaryBackgroung,
    flex: 1,
    marginTop: '5%',
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: 70,
    borderRadius: 8,
    //alignItems: "center",
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
    top: '7%',
    //alignItems: 'flex-start'
    left: '8%',
    //flexDirection: 'column',
  },
  content3: {
    flexDirection: "row",
    justifyContent: 'space-around',
    left: '2%',
    
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
    left: '-75%'
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
  },
  contentItems2: {
    //flexDirection: 'row',
    right: 16,
  },
});
