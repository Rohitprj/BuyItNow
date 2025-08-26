// import { View, Text } from 'react-native';
// import React, { useActionState, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '@store/reduxHook';
// import { getHomeContent } from './api/actions';

// const Home = () => {
//   const dispatch = useAppDispatch();
//   const { data, loading, error } = useAppSelector(state => state.home);

//   useEffect(() => {
//     dispatch(getHomeContent(1));
//   }, []);

//   return (
//     <View>
//       <Text>Home</Text>
//       {/* <Text>{JSON.stringify(data)}</Text> */}
//     </View>
//   );
// };

// export default Home;

import { View, Text } from 'react-native';
import React from 'react';

export default function index() {
  console.log('Home');
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
