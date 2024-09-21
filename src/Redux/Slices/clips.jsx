import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const dataClips = { viedoclip: "", videoLink: "", loading: true };
export const clips = createAsyncThunk(
  "MoviesClips",
  async (movie_id, AsyncThunk) => {
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
export const seriesClips = createAsyncThunk(
  "SeriesClips",
  async (series_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${series_id}/videos`,
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
  name: "Getclips",
  initialState: dataClips,
  extraReducers: (builder) => {
    builder.addCase(clips.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(clips.fulfilled, (state, action) => {
      state.loading = false;
      const theClip = action.payload.results.filter((info) => {
        return info.type == "Clip";
      });

      if (theClip.length <= 0) {
        const theClip = action.payload.results.filter((info) => {
          return info.type == "Teaser";
        });
        theClip.map((info) => {
          state.videoLink = info.key;
          state.viedoclip = info.key;
        });
      } else {
        theClip.map((info) => {
          state.viedoclip = info.key;
          state.videoLink = info.key;
        });
      }
    });
    builder.addCase(seriesClips.rejected, (state, { payload }) => {
      state.loading = false;
    });
    // Series Clips
    builder.addCase(seriesClips.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(seriesClips.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.results.length != 0) {
        action.payload.results.map((info) => {
          console.log(info.key);
          state.viedoclip = info.key;
          state.videoLink = info.key;
        });
      } else {
        state.viedoclip = "";
      }
    });
    builder.addCase(clips.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});
export const clipsdata = ClipsMove.reducer;
