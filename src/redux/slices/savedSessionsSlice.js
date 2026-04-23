import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const savedSessionsSlice = createSlice({
  name: "savedSessions",
  initialState,
  reducers: {
    addSavedSession: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeSavedSession: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const found = state.items.find((item) => item.id === action.payload.id);

      if (found) {
        found.quantity = Math.max(1, action.payload.quantity);
      }
    },
  },
});

export const { addSavedSession, removeSavedSession, updateQuantity } =
  savedSessionsSlice.actions;

export default savedSessionsSlice.reducer;
