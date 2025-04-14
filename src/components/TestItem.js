import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TestItem = () => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>TestItem</Text>
    </View>
  );
};

export default TestItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#8E1616",
    padding: 12,
    marginVertical: 6,
    width: "96%",
    alignSelf: "center",
    borderRadius: 12,
  },
  itemTXT: {
    color: "#EEEEEE",
    fontSize: 21,
    fontWeight: "bold",
  },
});
