import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" color="black" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        value={term}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
