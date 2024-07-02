import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./DataSlice";

const Store = configureStore({
  reducer: { data: dataReducer },
});

export default Store;
