import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./type";

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("http://localhost:3000/login", {
      username,
      password,
    });
    const user = response.data.user;
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure());
  }
};
