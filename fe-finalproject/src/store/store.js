import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import authReducer from "../reducers/loginReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  // add other reducers here
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// const rootReducer = combineReducers({
//   sales: salesReducer,
//   inventory: inventoryReducer
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
