import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Hi Vipul!!</Text>
      <Button
        title="Components"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button title="List" onPress={() => props.navigation.navigate("List")} />
      <Button
        title="Image"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Colors"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Square"
        onPress={() => props.navigation.navigate("Square")}
      />
      <Button
        title="TextInput"
        onPress={() => props.navigation.navigate("Text")}
      />
      <Button title="Box" onPress={() => props.navigation.navigate("Box")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
