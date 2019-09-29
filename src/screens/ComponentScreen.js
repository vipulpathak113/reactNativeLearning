import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  let name = "Vipul";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native!</Text>
      <Text style={styles.nameStyle}>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35
  },
  nameStyle: {
    fontSize: 20
  }
});

export default ComponentScreen;
