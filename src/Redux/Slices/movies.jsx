import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const moveData = {
  moviesinfo: [],
  loading: true,
  movieErore: "",
  topMovies: [],
};
export const apiMovies = createAsyncThunk(
  "apiMovies",
  async (defulte = 1, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
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
      return rejectWithValue(Errore);
    }
  }
);

const allMovies = createSlice({
  name: "GetMovie",
  initialState: moveData,
  extraReducers: (builder) => {
    builder.addCase(apiMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(apiMovies.fulfilled, (state, action) => {
      state.moviesinfo = action.payload.results;
      const top = action.payload.results.filter((info) => {
        return info.vote_average > 7;
      });
      state.topMovies = top;
      state.loading = false;
    });
    builder.addCase(apiMovies.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const movies = allMovies.reducer;
