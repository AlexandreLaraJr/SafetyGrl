import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
  },
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5%",
  },
  logo: {
    width: 80,
    height: 70,
  },
  nameLogo: {
    width: 170,
    height: 40,
  },
});
