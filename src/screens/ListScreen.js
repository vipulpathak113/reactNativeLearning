import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Vipul", age: "26" },
    { name: "Tapan", age: "26" },
    { name: "Mridul", age: "27" }
  ];

  return (
    <FlatList
      horizontal={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text>
            {item.name} -Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

export default ListScreen;
