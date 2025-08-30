import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { navigation } from '@navigation/NavigationUtils';
import { screenWidth } from '@utils/Constants';

const Sponser: FC<{ data: any }> = ({ data }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation('Categories')}
    >
      <Image style={styles.img} source={{ uri: data?.data![0].image_uri }} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    height: 70,
    width: screenWidth - 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
});

export default Sponser;
