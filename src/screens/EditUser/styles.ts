import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    backgroundColor: theme.colors.secundaryBackgroung,
    flex: 1,
    marginTop: "5%",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "20%",
    borderRadius: 8,
    alignItems: "center",
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: "5%",
    left: "-4%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    right: "-10%",
  },
  iconUser: {
    width: 45,
  },
  contentDatas: {
    top: "7%",
    left: "10%",
  },
  datas: {
    color: theme.colors.blackopacity,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },
  contentPersonalDatas: {
    backgroundColor: theme.colors.datasBackgroung,
    width: 290,
    height: "auto",
    borderRadius: 8,
    borderWidth: 0.5,
    marginBottom: 20,
    justifyContent: "center",
  },
  personalDatas: {
    color: "black",
    fontSize: 15,
    padding: 5,
  },
  contentEdit: {
    flexDirection: "row",
    marginTop: 100,
  },
  buttonStyle: {
    width: "30%",
    height: 45,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  datasEdit: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: theme.colors.footer,
    fontWeight: "500",
  },
  buttonText: {
    flex: 1,
    color: "white",
    fontSize: 14,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    justifyContent: "space-around",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    marginTop: "10%",
    marginBottom: "10%",
  },
});
