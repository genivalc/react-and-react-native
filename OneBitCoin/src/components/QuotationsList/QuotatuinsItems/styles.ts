import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContent: {
   width: "95%",
   height: "auto",
   backgroundColor: "#111",
   marginLeft: "3%",
   marginBottom: 15,
   borderRadius: 10,
   flexDirection: "row",
   alignItems: "center",
   padding: 10
  },
  logoBitcoin: {
    width: 40,
    height: 40,
    marginLeft:2 
  },
  boxLogo:{
    flexDirection: "row",
    alignItems: "center"
  },
  contextLeft: {
    width: "36%",
    alignItems: "flex-start"
  },
  dayCotation: {
    fontSize: 16,
    paddingLeft: 2,
    color: "#ddd9ce",
    fontWeight: "bold"
  },
  contextRight: {
    width: "60%",
    alignItems: "flex-end"
  },
  price: {
    fontSize: 18,
    color: "#ddd9ce",
    fontWeight: "bold"
  },

 
});