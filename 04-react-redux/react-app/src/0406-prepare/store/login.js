import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "./helper/createAsyncSlice";

const token = createAsyncSlice({
  name: "token",
  fetchConfig: (user) => {
    return {
      url: "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      },
    };
  },
});

const user = createAsyncSlice({
  name: "token",
  fetchConfig: (token) => {
    return {
      url: "https://dogsapi.origamid.dev/json/api/user",
      options: {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    };
  },
});

const reducer = combineReducers({
  token: token[0].reducer,
  user: user[0].reducer,
});

export const fetchToken = token[1].asyncAction;
export const fetchUser = user[1].asyncAction;
export default reducer;

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token) {
      await dispatch(fetchUser(payload.token));
    }
  } catch (error) {}
};
