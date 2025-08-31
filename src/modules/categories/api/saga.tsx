import { call, put, takeEvery } from 'redux-saga/effects';
import { setData, setError, setLoading } from './slice';
import { fetchCategoryData } from './api';
import { GET_CATEGORY } from './constants';

function* getCategoryApiData(): any {
  try {
    yield put(setLoading());
    const data = yield call(fetchCategoryData);
    yield put(setData(data));
  } catch (error: any) {
    yield put(setError(error.message));
  }
}

function* categorySaga() {
  yield takeEvery(GET_CATEGORY, getCategoryApiData);
}
export default categorySaga;
