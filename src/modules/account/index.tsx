import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useAppSelector } from '@store/reduxHook';
import { getOrderByUserId } from './api/api';
import CustomSafeAreaView from '@components/atoms/CustomSafeAreaView';
import { orderStyles } from '@styles/orderStyles';
import LoginModal from './molecules/LoginModal';
import { formatDate } from '@utils/Constants';

export default function Account() {
  const route = useRoute();
  const item = route.params as any;
  console.log('ITEMS', item);
  const user = useAppSelector(state => state.account.user) as any;
  console.log('User Data', JSON.stringify(user, null, 2));
  const [isVisible, setIsVisible] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);

  const fetchOrder = async () => {
    const data = await getOrderByUserId(user?._id);
    console.log('Order Data', JSON.stringify(data, null, 2));
    if (data) {
      setOrders(data);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrder();
    } else {
      setOrders([]);
    }
  }, [user]);

  useEffect(() => {
    if (item?.isRefresh && user) {
      fetchOrder();
    }
  }, []);

  const renderItem = ({ item }: any) => (
    <View style={orderStyles.orderContainer}>
      <Image
        source={{ uri: item?.product?.image_uri }}
        style={orderStyles.image}
      />
      <View style={orderStyles.orderDetails}>
        <Text
          style={orderStyles.itemName}
        >{`${item.quantity} x ${item?.product?.name}`}</Text>
        <Text style={orderStyles.price}>₹{item?.product?.price}</Text>
      </View>
    </View>
  );

  return (
    <>
      <CustomSafeAreaView>
        <View style={orderStyles.container}>
          <Text style={orderStyles.heading}>
            {user ? user.phone : 'Account'}
          </Text>
          <View style={orderStyles.flexRow}>
            <Text style={orderStyles.subHeading}>
              {' '}
              {user ? user?.address : 'Log in to get exclusive offers'}{' '}
            </Text>
            <TouchableOpacity
              style={orderStyles.btn}
              onPress={() => setIsVisible(true)}
            >
              <Text style={orderStyles.btnText}>
                {user ? 'Update' : 'Login'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={orderStyles.listContainer}>
          <Text style={orderStyles.heading}>Your Orders</Text>
          <FlatList
            data={orders}
            keyExtractor={item => item?._id.toString()}
            renderItem={({ item }) => (
              <View style={orderStyles.order}>
                <FlatList
                  data={item?.items}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderItem}
                  scrollEnabled={false}
                />
                <Text style={orderStyles.address}>{item?.address}</Text>
                <Text style={orderStyles.deliveryDate}>
                  Delivered By : {formatDate(item?.deliveryDate)}
                </Text>
                <View style={orderStyles.statusContainer}>
                  <Text style={orderStyles.statusText}>{item?.status}</Text>
                </View>
              </View>
            )}
            ListEmptyComponent={
              <View>
                <Text style={orderStyles.emptyText}>
                  {!user
                    ? 'LOGIN TO PLACE YOUR ORDER'
                    : 'THERE ARE NO NEW ORDERS'}
                </Text>
              </View>
            }
          />
        </View>
      </CustomSafeAreaView>
      <LoginModal onClose={() => setIsVisible(false)} visible={isVisible} />
    </>
  );
}

const styles = StyleSheet.create({});
