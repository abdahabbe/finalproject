// thunks/salesThunks.js
import { addSale, deleteSale, updateSale } from '../actions/salesAction';

export const addSaleAsync = (itemData) => (dispatch) => {
  // Make API call to add item to sales
  // Dispatch action after successful response
  dispatch(addSale(itemData));
};

export const deleteSaleAsync = (itemId) => (dispatch) => {
  // Make API call to delete item from sales
  // Dispatch action after successful response
  dispatch(deleteSale(itemId));
};

export const updateSaleAsync = (itemData) => (dispatch) => {
  // Make API call to update item in sales
  // Dispatch action after successful response
  dispatch(updateSale(itemData));
};
