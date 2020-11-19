import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = ({}) => {
  const [term, setTerm] = useState("");
  const [SearchApi, loader, error, results] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => SearchApi(term)} />
      {loader ? (
        <Text>Please Wait...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : results.length > 0 ? (
        <View style={styles.list}>
          {/* <Text>We have found {results.length} results</Text> */}
          <ScrollView>
            <ResultList results={filterResultsByPrice("$")} title="Cost Effective" />
            <ResultList results={filterResultsByPrice("$$")} title="Bit Costly" />
            <ResultList results={filterResultsByPrice("$$$")} title="Big Spender" />
          </ScrollView>
        </View>
      ) : results.length == 0 ? (
        <Text>No results found.</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  list: {},
});
export default SearchScreen;
