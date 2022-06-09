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
    marginTop: '30%',
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "5%",
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.footer,
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: '8%',
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
    marginLeft: '4%',
  },
  contentStatementItem: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: "25%",
    overflow: "hidden",
    // marginLeft: '5%',
    marginRight: '5%',
    padding: '1%',
    marginTop: '15%',
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
    paddingLeft: '5%',
    
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
