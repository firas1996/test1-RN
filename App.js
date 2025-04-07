import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <TextInput style={styles.imp} />
        <Button title="Add" />
      </View>
      <View style={styles.v2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
    // paddingBottom: 25,
  },
  v1: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  v2: { width: "100%", flex: 7 },
  imp: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
  },
});
