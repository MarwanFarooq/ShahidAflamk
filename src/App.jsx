import React from "react";
import MainHeader from "./MainHeader/MainHeader";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Movie from "./Pages/Movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CastMovieInfo from "./Pages/Cast&CrewInfo/CastMovieInfo";
import CastseriesInfo from "./Pages/Cast&CrewInfo/CastseriesInfo";

import ContectUS from "./Pages/ContectUS";
import Fotter from "./MAinFotter/Fotter";
import MovieDetails from "./Pages/Moviescomponent/MovieDetails";
import SeriesDetailes from "./Pages/SeriesComponent/SeriesDetailes";
import Persondetails from "./Pages/CreditComponent/Persondetails";
import MoviesReviews from "./Pages/AllReviews/MoviesReviews";
import SeriesReviews from "./Pages/AllReviews/SeriesReviews";

const App = () => {
  return (
    <div className="dark:bg-black bg-white">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/contectUS" element={<ContectUS />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/SeriesDetailes/:id" element={<SeriesDetailes />} />
        {/*  */}
        <Route path="/moviesreviews/:id" element={<MoviesReviews />} />
        <Route path="/seriesreviews/:id" element={<SeriesReviews />} />
        {/* cast$crwe page */}
        <Route path="/castMovieInfo/:id" element={<CastMovieInfo />} />
        <Route path="/castSeriesInfo/:id" element={<CastseriesInfo />} />
        {/* crdite details */}
        <Route path="/persondetails/:id" element={<Persondetails />} />
        {/* movie details */}
      </Routes>
      <Fotter />
    </div>
  );
};

export default App;
