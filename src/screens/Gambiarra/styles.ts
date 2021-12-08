import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { Statements } from "../Statements";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    paddingLeft: 20,
  },
  iconStatement: {
    width: 35,
    height: 35,
  },
  contentStatement: {
    alignItems: "center",
    justifyContent: "center",
    left: 20,
    width: 300,
  },
  contentStatement2: {
    alignItems: "center",
    justifyContent: "center",
    left: 25,
    backgroundColor: "white",
    width: 280,
    marginRight: 85,
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
  },
  statement: {
    fontSize: 18,
    width: 260,
    paddingBottom: 10,
  },
  statementTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    paddingTop: 10,
    width: 150,
    marginRight: 110,
  },
});
