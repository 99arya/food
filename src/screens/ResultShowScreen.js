import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    console.log("id", id);
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, [id]);

  if (!result) {
    return null;
  } else if (result) {
    return (
      <View style={styles.container}>
        <Text>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={(i) => {
            const { item } = i;
            return <Image style={styles.image} key={item} source={{ uri: item }} />;
          }}
        />
      </View>
    );
  }
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
