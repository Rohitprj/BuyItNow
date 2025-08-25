import { combineReducers } from 'redux';
import homeReducers from '@modules/home/api/slice';

export default combineReducers({
  home: homeReducers,
});
