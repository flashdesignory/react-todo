import { combineReducers } from 'redux';
import uniqid from 'uniqid';
import { storageId } from '../constants';

import {
  ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, TOGGLE_ITEM,
  FILTER_ITEMS, SEARCH_ITEMS,
} from './constants';

import {
  addItem, removeItem, updateItem,
} from '../api/api';

const handleAddItem = (data, value) => {
  const item = {};
  item.id = uniqid();
  item.action = value;
  item.completed = false;

  addItem(storageId, item);
  const udpatedData = [item, ...data];
  return udpatedData;
};

const handleUpdateItem = (data, value) => {
  updateItem(storageId, value);
  const updatedData = data.map((item) => {
    if (item.id === value.id) {
      return value;
    }
    return item;
  });
  return updatedData;
};

const handleRemoveItem = (data, id) => {
  removeItem(storageId, id);
  const updatedData = data.filter(item => item.id !== id);
  return updatedData;
};

const handleToggleItem = (data, id) => {
  const updatedData = data.map((item) => {
    if (item.id === id) {
      const updatedItem = { ...item, completed: !item.completed };
      updateItem(storageId, updatedItem);
      return updatedItem;
    }
    return item;
  });
  return updatedData;
};

export const data = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return handleAddItem(state, action.value);
    case REMOVE_ITEM:
      return handleRemoveItem(state, action.value);
    case UPDATE_ITEM:
      return handleUpdateItem(state, action.value);
    case TOGGLE_ITEM:
      return handleToggleItem(state, action.value);
    default:
  }
  return state;
};

export const filter = (state = '', action) => {
  switch (action.type) {
    case FILTER_ITEMS:
      return action.value;
    default:
  }
  return state;
};

export const search = (state = '', action) => {
  switch (action.type) {
    case SEARCH_ITEMS:
      return action.value;
    default:
  }
  return state;
};

export default combineReducers({
  filter,
  data,
  search,
});
