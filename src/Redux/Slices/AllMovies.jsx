import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const allVideo = { allmovie: [], loading: true };

export const videos = createAsyncThunk(
  "MoviesClips",
  async (movie_id, AsyncThunk) => {
    console.log(movie_id);
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
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
const ClipsMove = createSlice({
  name: "ClipsMove",
  initialState: allVideo,
  extraReducers: (builder) => {
    builder.addCase(videos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(videos.fulfilled, (state, action) => {
      state.loading = false;
      state.allmovie = action.payload.results;
    });
    builder.addCase(videos.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const videosinfo = ClipsMove.reducer;
