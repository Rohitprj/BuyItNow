import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@store/reduxHook';
import {
  addItems,
  removeItem,
  selectItemCountById,
} from '@modules/cart/api/slice';
import { Colors } from '@utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '@components/atoms/Icon';

const UniversalAdd: FC<{ item: any }> = ({ item }) => {
  const count = useAppSelector(selectItemCountById(item._id));
  const dispatch = useAppDispatch();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: count === 0 ? '#fff' : Colors.active },
      ]}
    >
      {count === 0 ? (
        <TouchableOpacity
          onPress={() => dispatch(addItems(item))}
          style={styles.add}
        >
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => dispatch(removeItem(item))}>
            <Icon
              name="minus"
              color="#fff"
              iconFamily="MaterialCommunityIcons"
              size={RFValue(14)}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{count}</Text>
          <TouchableOpacity onPress={() => dispatch(addItems(item))}>
            <Icon
              name="plus"
              color="#fff"
              iconFamily="MaterialCommunityIcons"
              size={RFValue(14)}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.active,
    width: 65,
  },
  add: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  addText: {
    color: Colors.active,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: RFValue(14),
  },
});
export default UniversalAdd;
