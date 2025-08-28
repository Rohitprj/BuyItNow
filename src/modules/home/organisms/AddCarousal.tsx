import { View, Text, StyleSheet } from 'react-native';
import React, { FC, useState } from 'react';
import { screenHeight, screenWidth } from '@utils/Constants';
import Carousel from 'react-native-reanimated-carousel';
import FilmSlip from '../molecules/FilmSlip';

const AddCarousal: FC<{ data: any }> = ({ data }) => {
  const [active, setActive] = useState(0);
  const baseOption = {
    vertical: false,
    width: screenWidth,
    height: screenHeight * 0.8,
  };
  return (
    <View>
      <FilmSlip />
    </View>
  );
};
const styles = StyleSheet.create({});

export default AddCarousal;
