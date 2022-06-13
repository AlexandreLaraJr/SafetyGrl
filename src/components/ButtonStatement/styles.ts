import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '60%',
    height: '8%',
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: '10%',
    borderColor: "white",
    flexDirection: "row",
    alignSelf: 'center',
    alignItems: "center",
    //position: "absolute", //deixa em cima ou em baixo
    //bottom: '10%',
    
  },
  titleButton: {
    flex: 1,
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    
  },
});
