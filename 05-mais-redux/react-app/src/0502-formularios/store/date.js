import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "date",
  initialState: {
    formData: {},
  },
  reducers: {
    adicionarData(state, action) {
      state.formData = action.payload;
    },
  },
});

export const { adicionarData } = slice.actions;

export default slice.reducer;
