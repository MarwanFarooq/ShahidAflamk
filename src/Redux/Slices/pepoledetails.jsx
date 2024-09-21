import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const creditID = {
  creditData: [],
  loading: true,
  moveWorkIninfo: [],
  seriesWorkIninfo: [],
  externalIDsinfo: [],
};
export const creditGetInfo = createAsyncThunk(
  "creditGetInfo",
  async (id, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}`,
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
export const movieWorkIn = createAsyncThunk(
  "movieWorkIn",
  async (id, AsyncThunk) => {
    console.log(id);
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}/movie_credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJkZmM0NjZkZjRlNmI3NmNlMTI1ZGY0NDMxNzUzOSIsInN1YiI6IjY2MzgyZDViODEzY2I2MDEyOTg5M2VkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R6JxnWy_QyrDHiavJIMZ01Ss1ej3KRS-YuTP97AYieI",
        },
      });
      return data.data;
    } catch (Errore) {
      return rejectWithValue(Errore);
    }
  }
);
export const seriesWorkIn = createAsyncThunk(
  "seriesWorkIn",
  async (id, AsyncThunk) => {
    console.log(id);
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}/tv_credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJkZmM0NjZkZjRlNmI3NmNlMTI1ZGY0NDMxNzUzOSIsInN1YiI6IjY2MzgyZDViODEzY2I2MDEyOTg5M2VkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R6JxnWy_QyrDHiavJIMZ01Ss1ej3KRS-YuTP97AYieI",
        },
      });
      return data.data;
    } catch (Errore) {
      return rejectWithValue(Errore);
    }
  }
);
export const externalIDs = createAsyncThunk(
  "externalIDs",
  async (id, AsyncThunk) => {
    console.log(id);
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}/external_ids`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJkZmM0NjZkZjRlNmI3NmNlMTI1ZGY0NDMxNzUzOSIsInN1YiI6IjY2MzgyZDViODEzY2I2MDEyOTg5M2VkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R6JxnWy_QyrDHiavJIMZ01Ss1ej3KRS-YuTP97AYieI",
        },
      });
      return data.data;
    } catch (Errore) {
      return rejectWithValue(Errore);
    }
  }
);

const creditinfo = createSlice({
  name: "creditinfo",
  initialState: creditID,
  extraReducers: (builder) => {
    builder.addCase(creditGetInfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(creditGetInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.creditData = action.payload;
    });
    builder.addCase(creditGetInfo.rejected, (state, { payload }) => {});
    //
    builder.addCase(movieWorkIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(movieWorkIn.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload.cast);
      state.moveWorkIninfo = action.payload.cast;
    });
    builder.addCase(movieWorkIn.rejected, (state, { payload }) => {});
    // seriesWorkIn
    builder.addCase(seriesWorkIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(seriesWorkIn.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload.cast);
      state.seriesWorkIninfo = action.payload.cast;
    });
    builder.addCase(seriesWorkIn.rejected, (state, { payload }) => {});
    //
    builder.addCase(externalIDs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(externalIDs.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.externalIDsinfo = action.payload;
    });
    builder.addCase(externalIDs.rejected, (state, { payload }) => {});
  },
});

export const allCreditInfo = creditinfo.reducer;
