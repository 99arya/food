import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log("id", id);
  return (
    <View style={styles.container}>
      <Text>SHOW</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});
export default ResultShowScreen;
