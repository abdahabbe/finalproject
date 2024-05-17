// reducers/inventoryReducer.js
import { ADD_INVENTORY_ITEM, DELETE_INVENTORY_ITEM, UPDATE_INVENTORY_ITEM } from '../actions/types';

const initialState = {
  inventory: []
};

const inventoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_INVENTORY_ITEM:
      return {
        ...state,
        inventory: [...state.inventory, action.payload]
      };
    case DELETE_INVENTORY_ITEM:
      return {
        ...state,
        inventory: state.inventory.filter(item => item.id !== action.payload)
      };
    case UPDATE_INVENTORY_ITEM:
      return {
        ...state,
        inventory: state.inventory.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      };
    default:
      return state;
  }
};

export default inventoryReducer;
