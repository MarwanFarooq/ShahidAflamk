import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const crediteinfo = { movieid: 0, cast: [], crew: [], loading: true };

export const Moviescredit = createAsyncThunk(
  "Moviescredit",
  async (movie_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
        params: { language: "en-US" },
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
export const seriesCredit = createAsyncThunk(
  "seriesCredit",
  async (movie_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${movie_id}/credits`,
        params: { language: "en-US" },
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
const creditors = createSlice({
  name: "creditors",
  initialState: crediteinfo,
  extraReducers: (builder) => {
    builder.addCase(Moviescredit.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Moviescredit.fulfilled, (state, action) => {
      state.loading = false;
      state.cast = action.payload.cast;
      state.crew = action.payload.crew;
      state.movieid = action.payload.id;
    });
    builder.addCase(Moviescredit.rejected, (state, { payload }) => {
      state.loading = false;
    });
    // Series crediteinfo
    builder.addCase(seriesCredit.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(seriesCredit.fulfilled, (state, action) => {
      state.loading = false;
      state.cast = action.payload.cast;
      state.crew = action.payload.crew;
      state.movieid = action.payload.id;
    });
    builder.addCase(seriesCredit.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});
export const allcreditors = creditors.reducer;
