import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  regionsList: [],
};

export const fetchUkraineRegions = createAsyncThunk("urkaineMap", () => {
  return axios
    .get("https://admin.ukrrebuild.com/wp-json/wp/v2/ukraine_map")
    .then((response) => response?.data[0]);
});

export const urkaineMapSlice = createSlice({
  name: "urkaineMap",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUkraineRegions.fulfilled, (state, action) => {
      state.regionsList = action.payload;
    });
  },
});
