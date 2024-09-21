import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const seriesData = { seriesinfo: [], loading: true, topSeries: [] };
export const apiseries = createAsyncThunk(
  "apiseries",
  async (defulte = 1, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/popular",
        params: {
          language: "en-US",
          page: `${defulte == 0 ? (defulte = 1) : defulte}`,
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjJmYTk0MjM4OTUxM2Q2YmIwNzY3ZTU1YjUwNjkwNCIsInN1YiI6IjY2MmEzN2Y3YmYzMWYyMDA5YWUzNDAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._79CzNA1Y04pki9Cxhp-e1w1mnRouIOJgkHqiLkru4A",
        },
      });
      return data.data;
    } catch (Errore) {
      rejectWithValue(Errore);
    }
  }
);

const allseries = createSlice({
  name: "Getseries",
  initialState: seriesData,
  extraReducers: (builder) => {
    builder.addCase(apiseries.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(apiseries.fulfilled, (state, action) => {
      state.loading = false;
      state.seriesinfo = action.payload.results;
      const top = action.payload.results.filter((info) => {
        return info.vote_average > 6.8;
      });
      state.topSeries = top;
    });
    builder.addCase(apiseries.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const series = allseries.reducer;
