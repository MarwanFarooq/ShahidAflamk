import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchSeries = createAsyncThunk(
  "searchSeries",
  async (movie_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/tv",
        params: {
          query: `${movie_id}`,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjJmYTk0MjM4OTUxM2Q2YmIwNzY3ZTU1YjUwNjkwNCIsInN1YiI6IjY2MmEzN2Y3YmYzMWYyMDA5YWUzNDAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._79CzNA1Y04pki9Cxhp-e1w1mnRouIOJgkHqiLkru4A",
        },
      });
      return data.data;
    } catch (Errore) {
      return rejectWithValue(Errore);
    }
  }
);
const seriesdata = { tvsearch: [], loading: true };
const tvinfo = createSlice({
  name: "tvinfo",
  initialState: seriesdata,
  extraReducers: (builder) => {
    builder.addCase(searchSeries.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchSeries.fulfilled, (state, action) => {
      state.loading = false;
      state.tvsearch = action.payload.results;
    });
    builder.addCase(searchSeries.rejected, (state, { payload }) => {});
  },
});

export const seriesSearch = tvinfo.reducer;
