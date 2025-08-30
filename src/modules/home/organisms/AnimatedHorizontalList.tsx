import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, { FC } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS, screenHeight, screenWidth } from '@utils/Constants';
import { navigation } from '@navigation/NavigationUtils';

const AnimatedHorizontalList: FC<{ data: any }> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{data?.title}</Text>
      <FlatList
        data={data?.data}
        keyExtractor={item => item?.id}
        horizontal
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            style={styles.imageContainer}
            onPress={() => navigation('Category')}
          >
            <Image source={{ uri: item?.image_uri }} style={styles.image} />
          </Pressable>
        )}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textStyle: {
    fontSize: RFValue(14),
    fontFamily: FONTS.heading,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  imageContainer: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.27,
    marginRight: 15,
  },
});
export default AnimatedHorizontalList;
