import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import React, { FC } from 'react';
import Icon from '@components/atoms/Icon';
import { goBack, navigation } from '@navigation/NavigationUtils';

interface searchBarProps {
  cartLengh: number;
}

const SearchBar: FC<searchBarProps> = ({ cartLengh }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => goBack()}>
        <Icon name="arrow-left" iconFamily="MaterialCommunityIcons" size={20} />
      </Pressable>
      <View style={styles.searchContainer}>
        <Icon name="search" iconFamily="MaterialIcons" size={20} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#666"
        />
      </View>
      <Icon name="heart-outline" iconFamily="Ionicons" size={24} color="#000" />
      <Pressable onPress={() => navigation('Cart')}>
        <Icon name="cart-sharp" iconFamily="Ionicons" size={24} color="#000" />
        {cartLengh > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartLengh}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    gap: 3,
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '70%',
    marginHorizontal: 10,
  },
  searchIcon: {
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  cartContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 50,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
export default SearchBar;
