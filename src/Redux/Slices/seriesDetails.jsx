import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const seriesDetails = {
  SeriesDetails: [],
  SeriesReviews: [],
  Seriescasting: [],
  Seriescrew: [],
  Seriesbackdropsimg: [],
  Seriesposters: [],
  seriesRecommendations: [],
  seriesVideo: [],
  seriesextrnalIDinfo: [],
  loading: true,
  key: [],
  recomindationloading: true,
};
export const allSeriesDetails = createAsyncThunk(
  "allSeriesDetails",
  async (series_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${series_id}`,
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

export const theSeriesReviews = createAsyncThunk(
  "thSeriesReviews",
  async (series_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${series_id}/reviews`,
        params: { language: "en-US", page: "1" },
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
export const Seriecastinginfo = createAsyncThunk(
  "castinginfo",
  async (series_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `
        https://api.themoviedb.org/3/tv/${series_id}/credits`,
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

export const seriesBackdrops = createAsyncThunk(
  "backdrops",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/images`,
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
export const seriesrecomindition = createAsyncThunk(
  "seriesrecomindition",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/recommendations`,
        params: { language: "en-US", page: "1" },
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
export const tvseriesvideos = createAsyncThunk(
  "tvseriesvideos",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/videos`,
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
export const seriesextrnalID = createAsyncThunk(
  "seriesextrnalID",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/external_ids`,
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
export const keywordseries = createAsyncThunk(
  "keywordseries",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/keywords`,
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

const seriesinfo = createSlice({
  name: "seriesinfo",
  initialState: seriesDetails,
  reducers: "",
  extraReducers: (builder) => {
    builder.addCase(allSeriesDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(allSeriesDetails.fulfilled, (state, action) => {
      state.SeriesDetails = action.payload;
      state.loading = false;
    });
    builder.addCase(allSeriesDetails.rejected, (state, { payload }) => {});
    //  casting

    builder.addCase(Seriecastinginfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Seriecastinginfo.fulfilled, (state, action) => {
      state.Seriescasting = action.payload.cast;
      state.loading = false;

      state.Seriescrew = action.payload.crew;
    });
    builder.addCase(Seriecastinginfo.rejected, (state, { payload }) => {});
    // MoviesReview
    builder.addCase(theSeriesReviews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(theSeriesReviews.fulfilled, (state, action) => {
      state.SeriesReviews = action.payload.results;
      state.loading = false;

      // state.seriesReview = null;
    });
    builder.addCase(theSeriesReviews.rejected, (state, { payload }) => {});

    // Backdrops
    builder.addCase(seriesBackdrops.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(seriesBackdrops.fulfilled, (state, action) => {
      state.Seriesbackdropsimg = action.payload.backdrops;
      state.loading = false;
      state.Seriesposters = action.payload.posters;
    });
    builder.addCase(
      seriesBackdrops.rejected,
      (state, { payload: { message } }) => {
        console.log(message);
      }
    );
    // recomindation
    builder.addCase(seriesrecomindition.pending, (state, action) => {
      state.recomindationloading = true;
    });
    builder.addCase(seriesrecomindition.fulfilled, (state, action) => {
      state.seriesRecommendations = action.payload.results;
      state.recomindationloading = false;
    });
    builder.addCase(
      seriesrecomindition.rejected,
      (state, { payload: { message } }) => {
        state.recomindationloading = false;
        console.log(message);
      }
    );
    builder.addCase(tvseriesvideos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(tvseriesvideos.fulfilled, (state, action) => {
      state.seriesVideo = action.payload.results;
      state.loading = false;
    });
    builder.addCase(tvseriesvideos.rejected, (state, { payload }) => {
      state.loading = false;
    });
    //
    builder.addCase(seriesextrnalID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(seriesextrnalID.fulfilled, (state, action) => {
      state.seriesextrnalIDinfo = action.payload;
      state.loading = false;
    });
    builder.addCase(
      seriesextrnalID.rejected,
      (state, { payload: { message } }) => {
        console.log(message);
      }
    );
    //
    builder.addCase(keywordseries.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(keywordseries.fulfilled, (state, action) => {
      state.key = action.payload.results;
      state.loading = false;
    });
    builder.addCase(
      keywordseries.rejected,
      (state, { payload: { message } }) => {
        console.log(message);
      }
    );
  },
});

export const seriesDataReview = seriesinfo.reducer;
