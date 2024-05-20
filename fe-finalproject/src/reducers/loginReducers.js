import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/type";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  console.log(`payload as`, action.payload)
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
