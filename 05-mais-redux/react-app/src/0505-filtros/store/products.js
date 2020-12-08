import { createSlice } from "@reduxjs/toolkit";
import data from "../mock/data";

const slice = createSlice({
  name: "products",
  initialState: {
    data,
    filters: {
      colors: [],
      prices: {
        max: 0,
        min: 0,
      },
    },
  },
  reducers: {
    changeFilters(state, action) {
      state.filters[action.payload.name] = action.payload.value;
    },
  },
});

export const { changeFilters } = slice.actions;

export const getProductsColors = ({ products }) => {
  const { data } = products;
  return Array.from(new Set(data.map(({ color }) => color)));
};

export default slice.reducer;
