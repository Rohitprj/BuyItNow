import { View, Text, StyleSheet } from 'react-native';
import React, { FC, useState } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { menuData } from '@utils/db';
import MenuItem from '../atoms/MenuItem';
import Icon from '@components/atoms/Icon';
import { Colors } from '@utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';

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
      <View style={styles.flexRow}>
        {menuData.map((item, index) => (
          <MenuItem
            item={item}
            key={index}
            isFocused={focusedIndex === index}
            onSelect={() => {
              setFocusedIndex(index);
            }}
          />
        ))}
      </View>
      <View style={styles.addressContainer}>
        <Icon name="home" size={16} iconFamily="Ionicons" />
        <Text style={styles.homeText}>Home</Text>
        <Text numberOfLines={1} style={styles.addressText}>
          705 C/2 ward no.3, Mehrauli New Delhi
        </Text>
        <Icon name="chevron-forward-sharp" size={16} iconFamily="Ionicons" />
      </View>
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
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  homeText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: Colors.text,
    fontSize: RFValue(12),
  },
  addressText: { flex: 1, color: Colors.text, fontSize: RFValue(11) },
});

export default MenuHeaders;
