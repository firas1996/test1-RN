import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const loginHandler = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(txt) => {
          setEmail(txt);
        }}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign In" onPress={loginHandler} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
