import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title} - {results.length}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => {
          result.id;
        }}
        renderItem={(i) => {
          const { item } = i;
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ResultShow", { id: item.id })}>
              <ResultDetail result={item} key={i.index} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
export default withNavigation(ResultList);
