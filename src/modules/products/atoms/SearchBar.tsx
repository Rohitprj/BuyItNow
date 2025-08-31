import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

interface searchBarProps {
  cartLengh: number;
}

const SearchBar: FC<searchBarProps> = ({ cartLengh }) => {
  return (
    <View style={styles.container}>
      <Text>SearchBar</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default SearchBar;
