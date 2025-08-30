import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import React, { FC } from 'react';
import { FONTS, screenWidth } from '@utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '@components/atoms/Icon';
import { navigation } from '@navigation/NavigationUtils';

const VerticalList: FC<{ data: any }> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.absoluteView, { backgroundColor: data?.bgColor }]} />
      <Text style={styles.headingText}>{data?.title}</Text>
      <Pressable style={[styles.buttons, { backgroundColor: data?.btnColor }]}>
        <Text style={styles.buttonText}>Explore more</Text>
        <Icon
          name="arrow-forward-sharp"
          iconFamily="Ionicons"
          color="#fff"
          size={16}
        />
      </Pressable>
      <FlatList
        data={data?.data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => navigation('Category')}
          >
            <Image source={{ uri: item?.image_uri }} style={styles.image} />
          </Pressable>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  absoluteView: {
    width: screenWidth,
    height: 180,
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  headingText: {
    fontSize: RFValue(16),
    fontFamily: FONTS.heading,
    color: '#222',
  },
  buttons: {
    padding: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: 10,
    marginVertical: 15,
  },
  buttonText: {
    fontWeight: '400',
    fontSize: RFValue(12),
    color: '#fff',
  },
  itemContainer: {
    width: '48%',
    margin: 5,
    height: 220,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
});
export default VerticalList;
