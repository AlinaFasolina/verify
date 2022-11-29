import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { timelineSlice } from "./timelineSlice";
import { targetedBeneficiariesSlice } from "./targetedBeneficiariesSlice";
import { achievementsPerClusterSlice } from "./achievementsPerClusterSlice";
import { allocatedByLocationSlice } from "./allocatedByLocationSlice";

export const store = configureStore({
  reducer: {
    timeline: timelineSlice.reducer,
    targetedBeneficiaries: targetedBeneficiariesSlice.reducer,
    achievementsPerCluster: achievementsPerClusterSlice.reducer,
    allocatedByLocation: allocatedByLocationSlice.reducer,
  },
});

setupListeners(store.dispatch);
