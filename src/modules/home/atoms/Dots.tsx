import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const Dots = (props: { index: number; active: number }) => {
  const { index, active } = props;

  const progress = useSharedValue(0);

  useEffect(() => {
    if (active === index) {
      progress.value = withRepeat(
        withTiming(1, { duration: 3000 }),
        1,
        false,
        () => {
          progress.value = 0;
        },
      );
    } else {
      progress.value = 0;
    }
  }, [active, index, progress]);

  return (
    <View
      style={{
        width: active === index ? 35 : 20,
        height: 4,
        borderRadius: 50,
        backgroundColor: '#000',
        overflow: 'hidden',
        marginHorizontal: 5,
      }}
    >
      <Text style={{ color: '#000' }}>Dots</Text>
      <Animated.View
        style={[{ height: '100%', backgroundColor: '#000', borderRadius: 50 }]}
      />
    </View>
  );
};

export default Dots;
