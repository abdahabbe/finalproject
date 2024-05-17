// thunks/inventoryThunks.js
import { addInventoryItem, deleteInventoryItem, updateInventoryItem } from '../actions/inventoryActions';

export const addInventoryItemAsync = (itemData) => (dispatch) => {
  // Make API call to add item to inventory
  // Dispatch action after successful response
  dispatch(addInventoryItem(itemData));
};

export const deleteInventoryItemAsync = (itemId) => (dispatch) => {
  // Make API call to delete item from inventory
  // Dispatch action after successful response
  dispatch(deleteInventoryItem(itemId));
};

export const updateInventoryItemAsync = (itemData) => (dispatch) => {
  // Make API call to update item in inventory
  // Dispatch action after successful response
  dispatch(updateInventoryItem(itemData));
};
