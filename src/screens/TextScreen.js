import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button, Text } from "react-native";
import ImageDetail from "../components/ImageDetail";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Name: </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={newText => setName(newText)}
      />
      <Text>My Name is {name} </Text>

      <Text>Enter Password: </Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={newText => setPassword(newText)}
      />
      <Text>
        {password.length < 5 && password.length > 0
          ? "Password must be longer than 5 characters"
          : null}{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
