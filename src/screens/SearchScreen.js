import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const [loader, setLoader] = useState(null);
  const [error, setError] = useState("");

  const [results, setResults] = useState([]);

  const SearchApi = async () => {
    setLoader(true);
    setResults([]);
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term, location: "san jose" },
      });
      console.log(response);
      setResults(response.data.businesses);
    } catch (e) {
      console.log(e);
      setLoader(false);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={SearchApi} />
      <Text size={30}>Search Screen</Text>
      {loader ? (
        <Text>Please Wait...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : results.length > 0 ? (
        <View style={styles.list}>
          <Text>We have found {results.length} results</Text>
          {results.map((item, index) => {
            return <Text key={index}> {item.name}</Text>;
          })}
        </View>
      ) : results.length == 0 ? (
        <Text>No results found.</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
});
export default SearchScreen;
