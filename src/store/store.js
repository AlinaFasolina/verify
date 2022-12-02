import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { timelineSlice } from "./timelineSlice";
import { targetedBeneficiariesSlice } from "./targetedBeneficiariesSlice";
import { achievementsPerClusterSlice } from "./achievementsPerClusterSlice";
import { allocatedByLocationSlice } from "./allocatedByLocationSlice";
import { supportClustersSlice } from "./supportClustersSlice";
import { allocatedByPartnerTypeSlice } from "./allocatedByPartnerTypeSlice";
import { allocationsByClusterSlice } from "./allocationsByClusterSlice";

export const store = configureStore({
  reducer: {
    timeline: timelineSlice.reducer,
    targetedBeneficiaries: targetedBeneficiariesSlice.reducer,
    achievementsPerCluster: achievementsPerClusterSlice.reducer,
    allocatedByLocation: allocatedByLocationSlice.reducer,
    supportClusters: supportClustersSlice.reducer,
    allocatedByPartnerType: allocatedByPartnerTypeSlice.reducer,
    allocationsByCluster: allocationsByClusterSlice.reducer,
  },
});

setupListeners(store.dispatch);
