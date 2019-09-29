import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.text}>This is image screen</Text>
      <ImageDetail
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="mountain"
        imageSource={require("../../assets/mountain.jpg")}
      />
      <ImageDetail
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;
