import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 40,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute", //deixa em cima ou em baixo
    bottom: 30,
    //shadowColor: theme.colors.primary,
  },
  titleButton: {
    flex: 1,
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});
