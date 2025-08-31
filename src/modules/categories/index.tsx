import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/reduxHook';
import { getCategory } from './api/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@utils/Constants';
import { navigation } from '@navigation/NavigationUtils';

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
      {loading ? (
        <ActivityIndicator size={'small'} color={'black'} />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() =>
                navigation('Products', {
                  id: item._id,
                  name: item.name,
                })
              }
            >
              <Image style={styles.image} source={{ uri: item?.image_uri }} />
              <Text style={styles.name}>{item?.name}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <>
              {error && (
                <Text style={{ ...styles.subTitle, backgroundColor: 'red' }}>
                  There was an error
                </Text>
              )}
            </>
          }
        />
      )}
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
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    marginTop: 10,
    fontSize: RFValue(14),
    fontFamily: FONTS.heading,
    fontWeight: '500',
    color: '#333',
  },
});

export default Category;
