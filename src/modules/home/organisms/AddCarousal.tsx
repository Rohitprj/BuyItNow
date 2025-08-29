import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React, { FC, useState } from 'react';
import { screenHeight, screenWidth } from '@utils/Constants';
import Carousel from 'react-native-reanimated-carousel';
import FilmSlip from '../molecules/FilmSlip';

const AddCarousal: FC<{ data: any }> = ({ data }) => {
  const [active, setActive] = useState(0);
  const baseOptions = {
    vertical: false,
    width: screenWidth,
    height: screenHeight * 0.8,
  };
  return (
    <View>
      <FilmSlip />
      {/* <Carousel
        {...baseOptions}
        loop
        pagingEnabled
        snapEnabled
        autoPlay
        autoPlayInterval={3000}
        onSnapToItem={(index: any) => setActive(index)}
        data={data}
        renderItem={({ item }: any) => (
          <Pressable style={styles.imageContainer}>
            <Image source={item?.image_uri} style={styles.img} />
          </Pressable>
        )}
      /> */}

      {active != null && (
        <View style={styles.dots}>
          {data?.data?.map((item: any, index: any) => {
            return <Text key={index}>Hey</Text>;
          })}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: { width: '100%', height: '100%' },
  img: { width: '100%', height: '100%', resizeMode: 'cover' },
  dots: {
    flexDirection: 'row',
    width: 100,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
});

export default AddCarousal;
