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
    marginLeft: 35,
    marginRight: 35,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  content2: {
    backgroundColor: theme.colors.secundaryBackgroung,
    flex: 1,
    marginTop: 10,
    marginBottom: "5%",
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 8,
  },
  contentSearch: {
    flexDirection: "row",
    top: "17%",
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
    width: 30,
    height: 30,
    tintColor: "#513D3E",
  },
  iconSearch: {
    width: 20,
    height: 20,
  },
  searchBar: {
    width: "85%",
    height: 30,
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 0.5,
    paddingLeft: "1%",
    left: "40%",
  },
  titulos: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    alignSelf: "center",
    top: "5%",
  },
});
