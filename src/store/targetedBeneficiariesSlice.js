import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  targetedBeneficiaries: [],
};

export const fetchTargetedBeneficiariesData = createAsyncThunk(
  "targetedBeneficiaries/fetchTargetedBeneficiariesData",
  () => {
    return axios
      .get("https://admin.ukrrebuild.com/wp-json/wp/v2/target-beneficiaries")
      .then((response) => response.data);
  }
);

export const targetedBeneficiariesSlice = createSlice({
  name: "targetedBeneficiaries",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      fetchTargetedBeneficiariesData.fulfilled,
      (state, action) => {
        state.targetedBeneficiaries = action.payload;
      }
    );
  },
});
