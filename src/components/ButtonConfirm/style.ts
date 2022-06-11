import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  buttonStyle: {
    // width: "30%",
    // height: 45,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    
  },
  buttonText: {
    flex: 1,
    color: "white",
    fontSize: 14,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: '5%',
  },
});
