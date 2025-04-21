import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TestItem = ({ title, id, isFav, updateItem }) => {
  //   const { title } = props;
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>{title}</Text>
      {/* <FontAwesome name="star-o" size={32} color="white" /> */}
      <FontAwesome name="star" size={32} color="yellow" />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemTXT: {
    color: "#EEEEEE",
    fontSize: 21,
    fontWeight: "bold",
  },
});
