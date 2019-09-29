import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textStyle1} />
      <View style={styles.textStyle2} />
      <View style={styles.textStyle3} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textStyle1: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "red"
  },
  textStyle2: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "green",
    marginTop: 50
  },

  textStyle3: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "blue"
  }
});

export default BoxScreen;
