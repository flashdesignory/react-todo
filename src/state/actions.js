import {
  ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, TOGGLE_ITEM,
  FILTER_ITEMS, SEARCH_ITEMS,
} from './constants';

export const addItem = value => ({
  type: ADD_ITEM,
  value,
});

export const removeItem = value => ({
  type: REMOVE_ITEM,
  value,
});

export const updateItem = value => ({
  type: UPDATE_ITEM,
  value,
});

export const toggleItem = value => ({
  type: TOGGLE_ITEM,
  value,
});

export const filterItems = value => ({
  type: FILTER_ITEMS,
  value,
});

export const searchItems = value => ({
  type: SEARCH_ITEMS,
  value,
});
