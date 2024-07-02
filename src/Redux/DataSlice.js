import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: { list: [] },
  reducers: {
    add(state, action) {
      state.list = [...state.list, action.payload];
    },
  },
});

export const dataSliceAction = DataSlice.actions;
export default DataSlice.reducer;
