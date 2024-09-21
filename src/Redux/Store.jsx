import { configureStore } from "@reduxjs/toolkit";
import { movies } from "./Slices/movies";
import { series } from "./Slices/series";
import { filmsDetails } from "./Slices/movieDetails";
import { seriesSearch } from "./Slices/SearchseriesDetils";
import { clipsdata } from "./Slices/clips";
import { videosinfo } from "./Slices/AllMovies";
import { seriesDataReview } from "./Slices/seriesDetails";

import { allcreditors } from "./Slices/Credits";
import { allCreditInfo } from "./Slices/pepoledetails";

const store = configureStore({
  reducer: {
    movies,
    series,
    filmsDetails,
    seriesSearch,
    clipsdata,
    videosinfo,
    // series page detials
    seriesDataReview,
    // cast&crew
    allcreditors,
    // CreditInfo
    allCreditInfo,
  },
});

export default store;
