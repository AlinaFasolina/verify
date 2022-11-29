import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allocatedByLocationList: [],
};

export const fetchAllocatedByLocation = createAsyncThunk(
  "allocatedByLocation",
  () => {
    return axios
      .get(
        "https://ukrrebuild.com/wp-json/wp/v2/allocated_by_loc?_fields=acf&acf_format=standard"
      )
      .then((response) => response.data);
  }
);

export const allocatedByLocationSlice = createSlice({
  name: "allocatedByLocation",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllocatedByLocation.fulfilled, (state, action) => {
      state.allocatedByLocationList = action.payload;
    });
  },
});
