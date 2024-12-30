import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getwhether = createAsyncThunk("whether", async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87375930694518eb2d5f87f07ea34bf3`
  );
  return response.data;
});

const whetherappslice = createSlice({
  name: "whether",
  initialState: {
    data: null,
    // loading:false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getwhether.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getwhether.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getwhether.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default whetherappslice.reducer;
