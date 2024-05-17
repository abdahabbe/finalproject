// actions/salesActions.js
import { SELECT_SALE } from './type';
import { ADD_SALE, DELETE_SALE, UPDATE_SALE } from './types';

export const addSale = (saleData) => ({
  type: ADD_SALE,
  payload: saleData
});

export const deleteSale = (saleId) => ({
  type: DELETE_SALE,
  payload: saleId
});

export const updateSale = (saleData) => ({
  type: UPDATE_SALE,
  payload: saleData
});

export const selectSale = (saleId) => ({
    type: SELECT_SALE,
    payload: saleId
  });
