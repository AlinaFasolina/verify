import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  donationsList: [],
};

const config = {
  headers: {
    Authorization: 'Bearer sk_test_51M5RX8B10ruzUTHO7bYzsF3tgQ6iSuGRUXrY4lgPkstKFb7aLYt3nEai9VR5YARDKU0s8URORjNU7LXYlOLTxHUL00tfTMBDwt',
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
