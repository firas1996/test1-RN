import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

// const [data, setData] = useState([]);
// const [inp, setInp] = useState("");
// const addItem = () => {
//   setData([...data, { title: inp, isFav: false, id: Math.random() }]);
//   setInp("");
// };
// const updateItem = (id) => {
//   setData(
//     data.map((item) => {
//       return item.id === id ? { ...item, isFav: !item.isFav } : item;
//     })
//   );
// };
// console.log(data);

// <View style={styles.container}>
//   <View style={styles.v1}>
//     <TextInput
//       style={styles.imp}
//       value={inp}
//       onChangeText={(txt) => {
//         setInp(txt);
//       }}
//     />
//     <Button title="Add" onPress={addItem} />
//   </View>
//   <View style={styles.v2}>
//     <FlatList
//       data={data}
//       renderItem={({ item }) => {
//         return (
//           <TestItem
//             title={item.title}
//             id={item.id}
//             isFav={item.isFav}
//             updateItem={updateItem}
//           />
//         );
//       }}
//     />
//   </View>
// </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EEEEEE",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: 48,
//     // paddingBottom: 25,
//   },
//   v1: {
//     width: "100%",
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-evenly",
//   },
//   v2: { width: "100%", flex: 7 },
//   imp: {
//     width: 300,
//     height: 50,
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 15,
//   },
// });
