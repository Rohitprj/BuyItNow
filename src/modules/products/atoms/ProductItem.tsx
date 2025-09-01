import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import UniversalAdd from './UniversalAdd';

interface ProductItemProps {
  isOdd: boolean;
  item: any;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, isOdd }) => {
  return (
    <View style={[styles.productCard, { marginRight: isOdd ? 0 : 10 }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image_uri }} style={styles.productImage} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.productName}>{item?.name}</Text>
        <Text style={styles.productDesc} numberOfLines={2}>
          {item?.description}
        </Text>
        <Text style={styles.productPrize}>
          <Text style={{ textDecorationLine: 'line-through' }}>
            ₹ {item?.price + 599}
          </Text>{' '}
          {item?.price}
        </Text>
        <View style={styles.flexRow}>
          <View style={styles.hotDealContainer}>
            <Text style={styles.hotDealText}>Hot Deal</Text>
          </View>
          <UniversalAdd item={item} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    width: '48%',
    overflow: 'hidden',
    marginTop: 10,
  },
  imageContainer: {
    backgroundColor: '#F7F7F7',
    width: '100%',
    height: 240,
  },
  productImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  productName: {
    fontSize: RFValue(10),
    marginTop: 10,
  },
  productDesc: {
    fontSize: RFValue(10),
    color: '#555',
    textAlign: 'left',
    marginTop: 5,
  },
  productPrize: {
    fontSize: RFValue(10),
    color: '#000',
    marginTop: 10,
    fontWeight: '500',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hotDealContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
    borderRadius: 4,
    alignSelf: 'flex-start',
    backgroundColor: '#E7F9EC',
  },
  hotDealText: {
    fontSize: RFValue(10),
    color: '#35AB4F',
    fontWeight: '700',
  },
});
export default ProductItem;
