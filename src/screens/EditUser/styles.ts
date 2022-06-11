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
    marginTop: '30%',
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "26%",
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.footer,
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: '5%',
    left: '-10%',

    
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.title,
    right: '-1%',

    
  },
  iconUser: {
    width: 45,
  },
  contentDatas: {
    top: '10%',
    marginRight: '10%'
    
  },
  datas: {
    color: theme.colors.blackopacity,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: '1%',
    marginBottom: '4%',

    
    marginLeft: '10%',
  },
  contentPersonalDatas: {
    backgroundColor: 'white',
    width: 290,
    height: 35,
    borderRadius: 8,
    borderWidth: 0.5,
    marginBottom: '1%',
    justifyContent: "center",
    marginLeft: '10%',

    
  },
  personalDatas: {
    color: "black",
    fontSize: 15,
    padding: 5,
    
  },
  contentEdit: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: "20%",

    
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
    
    
    marginTop: '20%' ,
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '15%',
    marginLeft: '10%',
  },
});
