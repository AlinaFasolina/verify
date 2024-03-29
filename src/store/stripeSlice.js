import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  donationsList: [],
};

const config = {
  headers: {
    Authorization: 'Bearer add_key_here',
  },
}

export const fetchStripeData = createAsyncThunk("stripeData", () => {
  return axios
    .get("https://api.stripe.com/v1/charges", config)
    .then((response) => response.data);
});

export const stripeSlice = createSlice({
  name: "stripeData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStripeData.fulfilled, (state, action) => {
      state.donationsList = action.payload;
    });
  },
});
