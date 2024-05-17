// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import salesReducer from '../reducers/salesReduceres';
import inventoryReducer from '../reducers/inventoryReducers';

const rootReducer = combineReducers({
  sales: salesReducer,
  inventory: inventoryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
