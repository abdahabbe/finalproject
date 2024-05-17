// actions/inventoryActions.js
import { SELECT_INVENTORY_ITEM } from './type';
import  { ADD_INVENTORY_ITEM, DELETE_INVENTORY_ITEM, UPDATE_INVENTORY_ITEM } from './types';

export const addInventoryItem = (itemData) => ({
  type: ADD_INVENTORY_ITEM,
  payload: itemData
});

export const deleteInventoryItem = (itemId) => ({
  type: DELETE_INVENTORY_ITEM,
  payload: itemId
});

export const updateInventoryItem = (itemData) => ({
  type: UPDATE_INVENTORY_ITEM,
  payload: itemData
});

export const selectInventoryItem = (itemId) => ({
    type: SELECT_INVENTORY_ITEM,
    payload: itemId
  });
