import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: '10%',
    
  },
  content: {
    height: '7%',
    flexDirection: "row",
    backgroundColor: theme.colors.secundaryBackgroung,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.footer,
    marginLeft: '8%',
    marginRight: '8%',
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: '30%',
  },
  content2: {
    backgroundColor: theme.colors.secundaryBackgroung,
    flex: -1,
    borderRadius: 8,
    
    marginTop: '4%',
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: '15%',
    borderWidth: 2,
    borderColor: theme.colors.footer,
  },

  contentMap: {
    width: Dimensions.get("window").width / 1.3,
    height: Dimensions.get("window").height / 3,
    borderRadius: 4,
    borderWidth: 1,
    overflow: "hidden",
    
  },

  iconSearch: {
    flex: -1,
    marginLeft: '-3%',
    width: 20,
    height: 20,
  },
  
  titulos: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    alignSelf: "center",
    top: "5%",

    
  },
});
