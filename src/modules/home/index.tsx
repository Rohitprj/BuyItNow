// import { View, Text, ScrollView } from 'react-native';
// import React, { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '@store/reduxHook';
// import { getHomeContent } from './api/actions';

// const Home = () => {
//   const dispatch = useAppDispatch();
//   const { data, loading, error } = useAppSelector(state => state.home);
//   console.log('Data', JSON.stringify(data, null, 2));
//   console.log('loading', loading);
//   console.log('error', error);

//   useEffect(() => {
//     dispatch(getHomeContent(1));
//   }, []);

//   return (
//     <ScrollView>
//       <Text>Home</Text>
//       <Text>{JSON.stringify(data, null, 2)}</Text>
//       <Text>{JSON.stringify(loading)}</Text>
//       <Text>{JSON.stringify(error)}</Text>
//     </ScrollView>
//   );
// };

// export default Home;

import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { screenHeight } from '@utils/Constants';
import MenuHeaders from './molecules/MenuHeaders';

const Home = () => {
  const insets = useSafeAreaInsets();

  const scrollYGlobal = useSharedValue(0);

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 100],
      [0, -100],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{ translateY: translateY }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={{ height: Platform.OS === 'android' ? insets.top : 0 }} />
      <Animated.View style={[moveUpStyle]}>
        <View>
          <MenuHeaders scrollY={scrollYGlobal} />
        </View>
      </Animated.View>

      <Animated.View
        style={[moveUpStyle, { height: screenHeight }]}
      ></Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
});
export default Home;
