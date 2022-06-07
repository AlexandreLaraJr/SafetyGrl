import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: 50,
  },
  content: {
    height: 50,
    flexDirection: "row",
    backgroundColor: theme.colors.secundaryBackgroung,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.footer,
    marginLeft: 35,
    marginRight: 35,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  content2: {
    backgroundColor: theme.colors.secundaryBackgroung,
    flex: -1,
    marginTop: 10,
    marginBottom: "10%",
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.footer,
  },
  contentSearch: {
    flex: -1,
    flexDirection: "row",
    top: "10%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 60,
  },
  contentMap: {
    width: Dimensions.get("window").width / 1.3,
    height: Dimensions.get("window").height / 3,
    borderRadius: 4,
    borderWidth: 1,
    overflow: "hidden",
  },
  iconNotification: {
    flex: -1,
    alignItems: 'center',
    marginLeft: '90%',
    width: 30,
    height: 30,
    tintColor: "#513D3E",
  },
  iconSearch: {
    flex: -1,
    marginLeft: -10,
    width: 20,
    height: 20,
  },
  searchBar: {
    flex: -1,
    width: "85%",
    height: 30,
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 0.5,
    paddingLeft: 5,
    left: "20%",
    marginRight: -10
  },
  
  titulos: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    alignSelf: "center",
    top: "5%",
  },
});
