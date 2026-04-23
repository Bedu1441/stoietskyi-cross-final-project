import { configureStore } from "@reduxjs/toolkit";
import savedSessionsReducer from "./slices/savedSessionsSlice";

export const store = configureStore({
  reducer: {
    savedSessions: savedSessionsReducer,
  },
});
