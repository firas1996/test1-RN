import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TestItem from "./src/components/TestItem";

export default function App() {
  const data = ["aaa", "bbb", "ccc", "ddd"];
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <TextInput style={styles.imp} />
        <Button title="Add" />
      </View>
      <View style={styles.v2}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <TestItem />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
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
