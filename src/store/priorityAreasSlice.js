import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  priorityAreasList: [],
};

export const fetchPriorityAreasList = createAsyncThunk("priorityAreas", () => {
  return axios
    .get("https://admin.ukrrebuild.com/wp-json/wp/v2/priority_areas")
    .then((response) => response?.data[0]);
});

export const priorityAreasSlice = createSlice({
  name: "priorityAreas",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPriorityAreasList.fulfilled, (state, action) => {
      state.priorityAreasList = action.payload;
    });
  },
});
