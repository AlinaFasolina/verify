import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { timelineSlice } from "./timelineSlice";
import { targetedBeneficiariesSlice } from "./targetedBeneficiariesSlice";

export const store = configureStore({
  reducer: {
    timeline: timelineSlice.reducer,
    targetedBeneficiaries: targetedBeneficiariesSlice.reducer,
  },
});

setupListeners(store.dispatch);
