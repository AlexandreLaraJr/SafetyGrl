import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  content: {
    backgroundColor: theme.colors.secundaryBackgroung,
    flex: 1,
    marginTop: '30%',
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "26%",
    height: 475,
    borderRadius: 8,
    //alignItems: "center",    
    borderWidth: 2,
    borderColor: theme.colors.footer,
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '8%',
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
  
  contentStatement: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    marginLeft: '4%',
    height: '100%',
    marginTop: '15%',
    marginBottom: "70%",
    
    
  },

  contentStatementItem: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: "100%",
    overflow: "hidden",
    marginRight: '5%',
    padding: '1%',
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
});
