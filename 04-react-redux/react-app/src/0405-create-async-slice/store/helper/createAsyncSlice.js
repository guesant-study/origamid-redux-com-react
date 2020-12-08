import { createSlice } from "@reduxjs/toolkit";

/**
 * Cria um slice com uma função assíncrona.
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */

const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        action.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        action.error = action.payload;
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

  const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const { url, options } = config.fetchConfig();
      const response = await fetch(url, options);
      const data = response.json();
      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchError(error.message || error));
    }
  };

  return [slice, { asyncAction }];
};

export default createAsyncSlice;
