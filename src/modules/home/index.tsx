import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/reduxHook';
import { getHomeContent } from './api/actions';

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(state => state.home);
  console.log('Data', JSON.stringify(data, null, 2));
  console.log('loading', loading);
  console.log('error', error);

  useEffect(() => {
    dispatch(getHomeContent(1));
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default Home;

// import { View, Text } from 'react-native';
// import React from 'react';

// export default function index() {
//   console.log('Home');
//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   );
// }

// import { View, Text } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '@store/reduxHook';
// import { getHomeContent } from './api/actions';
// import { fetchApiData } from './api/api';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Home = () => {
//   const [data, setData] = useState();
//   // const dispatch = useAppDispatch();
//   // const { data, loading, error } = useAppSelector(state => state.home);

//   useEffect(() => {
//     fetchApiData().then(response => {
//       setData(response.data);
//     });
//     // dispatch(getHomeContent(1));
//   }, []);

//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Home</Text>
//         <Text>{JSON.stringify(data, null, 2)}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default Home;
