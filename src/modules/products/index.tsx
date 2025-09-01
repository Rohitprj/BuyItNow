import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { FC, use, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getProductsByCategory } from './api/getProductsByCategory';
import { screenHeight } from '@utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './atoms/SearchBar';
import ProductItem from './atoms/ProductItem';
import { useAppSelector } from '@store/reduxHook';
import { selectTotalItemsInCart } from '@modules/cart/api/slice';

const Products: FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const route = useRoute();
  const category = route?.params as any;
  console.log('category', JSON.stringify(category, null, 2));

  const fetchProducts = async () => {
    const data = await getProductsByCategory(category?.id);
    console.log('products', JSON.stringify(data, null, 2));
    setProducts(data);
  };

  useEffect(() => {
    if (category?.id) {
      fetchProducts();
    }
  }, [category?.id]);

  const renderItem = ({ item, index }: any) => {
    const isOdd = index % 2 !== 0;
    return <ProductItem isOdd={isOdd} item={item} />;
  };

  const count = useAppSelector(selectTotalItemsInCart);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SearchBar cartLengh={count} />
      <FlatList
        bounces={false}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Opps! No items in this category
            </Text>
          </View>
        }
      />
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
