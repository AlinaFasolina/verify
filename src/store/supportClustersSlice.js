import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  supportClusters: [],
};

export const fetchSupportClusters = createAsyncThunk("supportClusters", () => {
  return axios
    .get("https://admin.ukrrebuild.com/wp-json/wp/v2/priority_support_clu")
    .then((response) => response?.data[0]);
});

export const supportClustersSlice = createSlice({
  name: "supportClusters",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSupportClusters.fulfilled, (state, action) => {
      state.supportClusters = action.payload;
    });
  },
});
