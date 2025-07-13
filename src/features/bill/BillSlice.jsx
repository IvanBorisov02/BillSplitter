import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bill: "",
  tip: "",
  numOfPeople: "",
  error: "",
};

const billSlice = createSlice({
  name: "bill",
  initialState: initialState,
  reducers: {
    setBill(state, action) {
      if (action.payload <= 0) {
        state.error = "Въведете число над 0!";
        state.bill = "";
        return;
      }
      state.bill = action.payload;
      state.error = "";
    },
    setTip(state, action) {
      if (action.payload < 0) {
        state.error = "Бакшишът може да бъде 0 или по-голямо от 0 число!";
        state.tip = "";
        return;
      }
      state.tip = action.payload;
      state.error = "";
    },
    setPeople(state, action) {
      if (action.payload <= 0) {
        state.error = "Въведете, въведете положително число!";
        state.numOfPeople = "";
        return;
      }
      state.numOfPeople = action.payload;
      state.error = "";
    },
    reset(state) {
      state.bill = "";
      state.tip = "";
      state.numOfPeople = "";
      state.error = "";
    },
  },
});

export default billSlice.reducer;
export const { setBill, setTip, setPeople, reset } = billSlice.actions;
