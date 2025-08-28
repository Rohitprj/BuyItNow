import { View, Text, StyleSheet } from 'react-native';
import React, { FC, useState } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const MenuHeaders: FC<{ scrollY: any }> = ({ scrollY }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const opacityFadeStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [10, 80], [1, 0]);
    return {
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.container, opacityFadeStyles]}>
      <Text>MenuHeaders</Text>
      <View style={styles.flexRow}></View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: { padding: 10 },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default MenuHeaders;
