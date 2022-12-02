import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allocatedByPartnerTypeList: [],
};

export const fetchAllocatedByPartnerType = createAsyncThunk(
  "allocatedByPartnerType",
  () => {
    return axios
      .get("https://admin.ukrrebuild.com/wp-json/wp/v2/alloc_by_partn_type")
      .then((response) => response?.data[0]);
  }
);

export const allocatedByPartnerTypeSlice = createSlice({
  name: "allocatedByPartnerType",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllocatedByPartnerType.fulfilled, (state, action) => {
      state.allocatedByPartnerTypeList = action.payload;
    });
  },
});
