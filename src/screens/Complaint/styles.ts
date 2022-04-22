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
    marginTop: 24,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 70,
    borderRadius: 8,
    alignItems: "center",
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: 25,
    left: -40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    right: -30,
  },
  iconAlert: {
    width: 40,
    height: 40,
  },
  content2: {
    top: 50,
    //justifyContent: 'space-between'
  },
  content3: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    right: -5,
  },
  input: {
    width: 280,
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
    width: 120,
    height: 25,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 5,
  },
  icon: {
    width: 15,
    height: 15,
    right: 20,
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
