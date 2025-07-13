import { configureStore } from "@reduxjs/toolkit";

import BillReducer from "./features/bill/billSlice";

const store = configureStore({
  reducer: {
    bill: BillReducer,
  },
});

export default store;
