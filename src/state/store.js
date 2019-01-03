import { createStore } from 'redux';
import rootReducer from './reducers';

import { storageId } from '../constants';
import defaultData from '../data';

import { getItem, addItem } from '../api/api';
import initialState from './default';

let initialData = getItem(storageId);
if (!initialData) {
  initialData = defaultData;
  addItem(storageId, initialData);
}

initialState.data = initialData;

export default createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
