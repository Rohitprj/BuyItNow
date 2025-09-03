import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '@components/atoms/CustomSafeAreaView';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAppSelector } from '@store/reduxHook';
import { selectCartItems } from './api/slice';
import { navigation } from '@navigation/NavigationUtils';
import { Colors } from '@utils/Constants';
import OderItems from './atoms/OderItems';

const index = () => {
  const carts = useAppSelector(selectCartItems);

  const renderItems = ({ item }: any) => <OderItems item={item} />;

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>My Cart</Text>
        <Text style={styles.number}> 🔢 </Text>
        <Text style={styles.address}>
          Deliver to: Login first to place your orders
        </Text>
      </View>

      {carts.length > 0 ? (
        <FlatList
          data={carts}
          renderItem={renderItems}
          keyExtractor={item => item._id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <TouchableOpacity
            style={styles.shopNowButton}
            onPress={() => navigation('Category')}
          >
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </CustomSafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 5,
    borderColor: '#F0F2F5',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: RFValue(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  number: { fontWeight: '500' },
  address: {
    marginTop: 3,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyText: {
    fontSize: RFValue(16),
    color: '#666',
    marginBottom: 16,
  },
  shopNowButton: {
    padding: 10,
    backgroundColor: Colors.active,
  },
  shopNowText: {
    color: '#fff',
    fontSize: RFValue(14),
    fontWeight: '600',
  },
  listContainer: {
    paddingTop: 8,
    paddingBottom: 100,
  },
});
export default index;
