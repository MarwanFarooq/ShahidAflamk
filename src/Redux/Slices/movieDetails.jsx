import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const moviedetails = {
  alldata: [],
  searchResult: [],
  casting: [],
  crew: [],
  Review: [],
  backdropsimg: [],
  posters: [],
  Recommendations: [],
  movieextrnalIDinfo: [],
  loading: true,
  key: [],
  Recominditionloading: true,
};

export const allMoviesDetails = createAsyncThunk(
  "Moviesdetails",
  async (movie_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movie_id}`,
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
export const searchMovie = createAsyncThunk(
  "searchMovie",
  async (movie_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
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
export const castinginfo = createAsyncThunk(
  "castinginfo",
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
export const theMovieReviews = createAsyncThunk(
  "Review",
  async (movie_id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
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

export const backdrops = createAsyncThunk(
  "backdrops",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/images`,
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
export const recomindition = createAsyncThunk(
  "recomindition",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/recommendations`,
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
export const movieextrnalID = createAsyncThunk(
  "extrnalID",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/external_ids`,
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
export const keywordmovie = createAsyncThunk(
  "keywordmovie",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/keywords`,
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

const getDetails = createSlice({
  name: "getDetails",
  initialState: moviedetails,

  extraReducers: (builder) => {
    builder.addCase(allMoviesDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(allMoviesDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.alldata = action.payload;
    });
    builder.addCase(allMoviesDetails.rejected, (state, { payload }) => {});
    // search result
    builder.addCase(searchMovie.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.loading = false;

      state.searchResult = action.payload.results;
    });
    builder.addCase(searchMovie.rejected, (state, { payload }) => {});
    // Casting info
    builder.addCase(castinginfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(castinginfo.fulfilled, (state, action) => {
      state.loading = false;

      state.casting = action.payload.cast;
      state.crew = action.payload.crew;
    });
    builder.addCase(castinginfo.rejected, (state, { payload }) => {});
    // MoviesReview
    builder.addCase(theMovieReviews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(theMovieReviews.fulfilled, (state, action) => {
      state.loading = false;
      state.Review = action.payload.results;
      console.log(action.payload.results);
    });
    builder.addCase(theMovieReviews.rejected, (state, { payload }) => {});

    // Backdrops
    builder.addCase(backdrops.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(backdrops.fulfilled, (state, action) => {
      state.loading = false;
      state.backdropsimg = action.payload.backdrops;
      state.posters = action.payload.posters;
    });
    builder.addCase(backdrops.rejected, (state, { payload: { message } }) => {
      console.log(message);
    });
    // recomindation
    builder.addCase(recomindition.pending, (state, action) => {
      state.Recominditionloading = true;
    });
    builder.addCase(recomindition.fulfilled, (state, action) => {
      state.Recommendations = action.payload.results;
      state.Recominditionloading = false;
    });
    builder.addCase(
      recomindition.rejected,
      (state, { payload: { message } }) => {
        console.log(message);
      }
    );
    //
    builder.addCase(movieextrnalID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(movieextrnalID.fulfilled, (state, action) => {
      state.movieextrnalIDinfo = action.payload;
      state.loading = false;
    });
    builder.addCase(
      movieextrnalID.rejected,
      (state, { payload: { message } }) => {
        console.log(message);
      }
    );
    //
    builder.addCase(keywordmovie.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(keywordmovie.fulfilled, (state, action) => {
      state.key = action.payload.keywords;
      state.loading = false;
    });
    builder.addCase(
      keywordmovie.rejected,
      (state, { payload: { message } }) => {
        console.log(message);
      }
    );
  },
});
export const filmsDetails = getDetails.reducer;
