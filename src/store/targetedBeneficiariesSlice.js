import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  targetedBeneficiariesList: [],
  targetedBeneficiariesTotal: null,
};

export const fetchTargetedBeneficiariesData = createAsyncThunk(
  "targetedBeneficiaries/fetchTargetedBeneficiariesData",
  () => {
    return axios
      .get("https://ukrrebuild.com/wp-json/wp/v2/target-beneficiaries")
      .then((response) => response.data);
  }
);

export const fetchTargetedBeneficiariesTotalData = createAsyncThunk(
  "targetedBeneficiaries/fetchTargetedBeneficiariesTotalData",
  () => {
    return axios
      .get("https://ukrrebuild.com/wp-json/wp/v2/target-benef-total")
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
        state.targetedBeneficiariesList = action.payload;
      }
    );
    builder.addCase(
      fetchTargetedBeneficiariesTotalData.fulfilled,
      (state, action) => {
        state.targetedBeneficiariesTotal = action.payload;
      }
    );
  },
});
