import { View, Text, StyleSheet } from 'react-native';
import React, { FC, use, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getProductsByCategory } from './api/getProductsByCategory';
import { screenHeight } from '@utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './atoms/SearchBar';

const Products: FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const route = useRoute();
  const category = route?.params as any;
  console.log('category', JSON.stringify(category, null, 2));

  const fetchProducts = async () => {
    const data = await getProductsByCategory(category?.id);
    setProducts(data);
  };

  useEffect(() => {
    if (category?.id) {
      fetchProducts();
    }
  }, [category?.id]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SearchBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  listContainer: {
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    height: screenHeight - 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyText: {
    fontSize: RFValue(14),
    color: '#666',
    marginBottom: 16,
  },
});
export default Products;
