import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allocationsByClusterList: [],
};

export const fetchAllocationsByCluster = createAsyncThunk(
  "allocationsByCluster",
  () => {
    return axios
      .get("https://admin.ukrrebuild.com/wp-json/wp/v2/allocationsbyclust")
      .then((response) => response?.data[0]);
  }
);

export const allocationsByClusterSlice = createSlice({
  name: "allocationsByCluster",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllocationsByCluster.fulfilled, (state, action) => {
      state.allocationsByClusterList = action.payload;
    });
  },
});
