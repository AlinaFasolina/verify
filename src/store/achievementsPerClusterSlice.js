import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  achievementsList: [],
};

export const fetchAchievementsPerCluster = createAsyncThunk(
  "achievementsPerCluster",
  () => {
    return axios
      .get(
        "https://admin.ukrrebuild.com/wp-json/wp/v2/achiev_per_cluster?_fields=acf&acf_format=standard"
      )
      .then((response) => response?.data[0]);
  }
);

export const achievementsPerClusterSlice = createSlice({
  name: "achievementsPerCluster",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAchievementsPerCluster.fulfilled, (state, action) => {
      state.achievementsList = action.payload;
    });
  },
});
