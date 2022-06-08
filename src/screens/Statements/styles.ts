import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
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
    borderWidth: 2,
    borderColor: theme.colors.footer,
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: 25,
  },
  contentText: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    marginLeft: 10,
    paddingLeft: 10,
  },
  contentStatement: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    marginTop: 10,
    paddingLeft: 10,
  },
  contentStatementItem: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: "25%",
    overflow: "hidden",
    marginLeft: 10,
    marginRight: 15,
    padding: 5,
    marginTop: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  contentStatementTextTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contentStatementText: {
    fontSize: 16,
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
  content2: {
    top: "5%",
    left: "8%",
    right: "8%",
    marginBottom: 200,
  },
});
