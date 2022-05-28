import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0,
    amountValue: 0,
  },
  reducers: {
    increment: (state) => {
      if (state.amountValue === 0) {
        state.counterValue += 1;
      } else {
        state.counterValue += state.amountValue;
      }
    },
    decrement: (state) => {
      if (state.amountValue === 0) {
        state.counterValue -= 1;
      } else {
        state.counterValue -= state.amountValue;
      }
    },
    amount: (state, action) => {
      state.amountValue = action.payload;
    },
  },
});

export const { increment, decrement, amount } = counterStore.actions;

export default counterStore.reducer;
