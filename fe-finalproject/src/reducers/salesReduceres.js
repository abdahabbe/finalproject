// reducers/salesReducer.js
import { ADD_SALE, DELETE_SALE, UPDATE_SALE } from '../actions/types';

const initialState = {
  sales: []
};

const salesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_SALE:
      return {
        ...state,
        sales: [...state.sales, action.payload]
      };
    case DELETE_SALE:
      return {
        ...state,
        sales: state.sales.filter(sale => sale.id !== action.payload)
      };
    case UPDATE_SALE:
      return {
        ...state,
        sales: state.sales.map(sale =>
          sale.id === action.payload.id ? action.payload : sale
        )
      };
    default:
      return state;
  }
};

export default salesReducer;
