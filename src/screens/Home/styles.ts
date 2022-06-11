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
    marginTop: '24%',
  },
  content2: {
    backgroundColor: theme.colors.secundaryBackgroung,
    flex: -1,
    borderRadius: 8,
    
    marginTop: '2%',
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: '-30%',
    borderWidth: 2,
    borderColor: theme.colors.footer,
  },
  contentSearch: {
    flex: -1,
    flexDirection: "row",
    marginLeft: '-7%',
    marginRight: '-3%',
    top: "10%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: '18%',
    
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
  searchBar: {
    flex: -1,
    width: "85%",
    height: '100%',
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 0.5,
    paddingLeft: '2%',
    left: "20%",
    marginRight: '-2%',
  },

  titulos: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    alignSelf: "center",
    top: "5%",
  },
});
