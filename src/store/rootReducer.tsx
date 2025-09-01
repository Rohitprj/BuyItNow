import { combineReducers } from 'redux';
import homeReducers from '@modules/home/api/slice';
import categoryReducer from '@modules/categories/api/slice';
import cartReducer from '@modules/cart/api/slice';

export default combineReducers({
  home: homeReducers,
  category: categoryReducer,
  cart: cartReducer,
});
