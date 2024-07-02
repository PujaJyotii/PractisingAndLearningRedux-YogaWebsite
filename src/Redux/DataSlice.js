import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: { list: [] },
  reducers: {
    add(state, action) {
      state.list = [...state.list, action.payload];
    },
    set(state, action) {
      state.list = action.payload;
    },
    delete(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    update(state, action) {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const dataSliceAction = DataSlice.actions;
export default DataSlice.reducer;
