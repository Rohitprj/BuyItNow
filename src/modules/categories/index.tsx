import { View, Text, StyleSheet } from 'react-native';
import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/reduxHook';
import { getCategory } from './api/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@utils/Constants';

const Category: FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(state => state.category);
  console.log('category', JSON.stringify(data, null, 2));
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SafeAreaView />
        <Text style={styles.title}>Category</Text>
        <Text style={styles.subTitle}>
          Explore our wide ranges of categories
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F9EC',
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: FONTS.heading,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: RFValue(13),
    color: '#666',
    marginTop: 5,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Category;
