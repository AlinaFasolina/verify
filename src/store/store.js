import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { timelineSlice } from "./timelineSlice";

export const store = configureStore({
  reducer: {
    timeline: timelineSlice.reducer,
  },
});

setupListeners(store.dispatch);
