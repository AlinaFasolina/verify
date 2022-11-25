import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  timelineList: [],
  error: "",
};

export const fetchTimelineData = createAsyncThunk(
  "timeline/fetchTimelineData",
  () => {
    return axios
      .get(
        "https://ukrrebuild.com/wp-json/wp/v2/timeline?_fields=acf&acf_format=standard"
      )
      .then((response) => response.data);
  }
);

export const timelineSlice = createSlice({
  name: "timeline",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTimelineData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTimelineData.fulfilled, (state, action) => {
      state.loading = false;
      state.timelineList = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTimelineData.rejected, (state, action) => {
      state.loading = false;
      state.timelineList = [];
      state.error = action.error.message;
    });
  },
});
