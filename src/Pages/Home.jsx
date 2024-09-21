import React, { useEffect } from "react";
import Firstsection from "./HomeComponent/Firstsection";
import Siliders from "./HomeComponent/Siliders";
import { useDispatch, useSelector } from "react-redux";
import { apiMovies } from "../Redux/Slices/movies";
import { apiseries } from "../Redux/Slices/series";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import ReactLoading from "react-loading";
import { clips, seriesClips } from "../Redux/Slices/clips";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { moviesinfo, topMovies, moviesClip, loading } = useSelector(
    (state) => state.movies
  );
  const { seriesinfo, topSeries } = useSelector((state) => state.series);
  const { viedoclip } = useSelector((state) => state.clipsdata);
  const navigition = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiMovies());
    dispatch(apiseries());
  }, []);
  const handelClips = (id, ClipID) => {
    if (id == "movies") {
      dispatch(clips(ClipID));
    } else if (id == "Tv-Series") {
      dispatch(seriesClips(ClipID));
    }
  };

  return (
    <div className="bg-white dark:bg-black dark:text-cyan-400 mx-[3em]">
      <div>
        <Firstsection />
        <Siliders
          data={moviesinfo}
          moviesClip={moviesClip}
          viedoclip={viedoclip}
          handelClips={handelClips}
          name={"movies"}
        />
        <Siliders
          data={seriesinfo}
          handelClips={handelClips}
          viedoclip={viedoclip}
          name={"Tv-Series"}
        />
        {/* Popular Movies */}
        <p className="text-4xl mt-[4em] font-bold">Top Movie</p>
        {loading ? (
          <div className="flex justify-center">
            <ReactLoading
              type={"bars"}
              color={`gray`}
              height={100}
              width={70}
            />
          </div>
        ) : (
          <div className="flex justify-center flex-wrap">
            {topMovies.map((info, index) => (
              <div key={index}>
                <Card
                  className={` max-w-[20rem] sm:max-w-[30rem] mt-[4em] w-full flex-row dark:bg-white dark:text-black bg-black text-white `}
                >
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                  >
                    <img
                      src={`https://media.themoviedb.org/t/p/w440_and_h660_face${info.poster_path}`}
                      alt="card-image"
                      className="h-full sm:w-full  md:w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="mb-4 uppercase"
                    >
                      <p className="dark:text-blue-400 text-white text-2xl">
                        Movies
                      </p>
                    </Typography>
                    {innerWidth <= 360 ? (
                      <Typography
                        variant="h4"
                        className=" dark:text-black text-white mb-2 text-center text-[1.6em]"
                      >
                        {info.title}
                      </Typography>
                    ) : (
                      <Typography
                        variant="h4"
                        className=" dark:text-black text-white mb-2 text-center"
                      >
                        {info.title}
                      </Typography>
                    )}

                    <div className="mb-[4em] flex gap-[4em] flex-wrap">
                      <p>
                        RATE:{" "}
                        <span className="dark:text-cyan-300 text-white">
                          {info.vote_average}
                        </span>{" "}
                      </p>
                      {info.vote_average < 7.3 ? (
                        <div className="flex">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-black bg-transparent" />
                        </div>
                      ) : info.vote_average < 7.6 ? (
                        <div className="flex">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStarHalfStroke className="text-yellow-500" />
                        </div>
                      ) : info.vote_average > 8 ? (
                        <div className="flex">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {innerWidth <= 360 ? (
                      ""
                    ) : (
                      <button
                        onClick={() => {
                          navigition(`/moviedetails/${[info.id]}`);
                        }}
                        className="btn btn-outline btn-accent"
                      >
                        <div className="flex justify-center flex-wrap gap-2 me-[1em]">
                          <h1> Show Details</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4 bg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </button>
                    )}
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        )}
        {/* popuilar TV Series */}
        <p className="text-4xl mt-[4em]  font-bold ">Top Series</p>
        {loading ? (
          <div className="flex justify-center">
            <ReactLoading
              type={"bars"}
              color={`gray`}
              height={100}
              width={70}
            />
          </div>
        ) : (
          <div className="flex justify-center flex-wrap">
            {topSeries.map((info, index) => (
              <div key={index}>
                <Card
                  className={`max-w-[20rem] sm:max-w-[30rem] mt-[4em] w-full flex-row dark:bg-white dark:text-black bg-black text-white me-[4em]`}
                >
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                  >
                    <img
                      src={`https://media.themoviedb.org/t/p/w440_and_h660_face${info.poster_path}`}
                      alt="card-image"
                      className="h-full sm:w-full  md:w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="mb-4 uppercase"
                    >
                      <p className="dark:text-blue-400 text-white text-2xl">
                        Tv-Series
                      </p>
                    </Typography>

                    {innerWidth <= 360 ? (
                      <Typography
                        variant="h4"
                        className=" dark:text-black text-white mb-2 text-center text-[1em] me-[0.4em] "
                      >
                        {info.original_name}
                      </Typography>
                    ) : (
                      <Typography
                        variant="h4"
                        className=" dark:text-black text-white mb-2 text-center"
                      >
                        {info.original_name}
                      </Typography>
                    )}

                    <div className="mb-[4em] flex gap-[4em] flex-wrap">
                      <p>
                        RATE:{" "}
                        <span className="dark:text-cyan-300 text-white  text-center">
                          {info.vote_average}
                        </span>{" "}
                      </p>
                      {info.vote_average < 7 ? (
                        <div className="flex">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStarHalfStroke className="text-yellow-500" />
                          <FaStar className=" " />
                        </div>
                      ) : info.vote_average < 7.6 ? (
                        <div className="flex">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="" />
                        </div>
                      ) : info.vote_average < 8 ? (
                        <div className="flex">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStarHalfStroke className="text-yellow-500" />
                        </div>
                      ) : info.vote_average >= 8 ? (
                        <div className="flex">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    {innerWidth <= 360 ? (
                      ""
                    ) : (
                      <button
                        onClick={() =>
                          navigition(`/SeriesDetailes/${[info.id]}`)
                        }
                        className="btn btn-outline btn-accent"
                      >
                        <div className="flex justify-center flex-wrap gap-2 me-[1em]">
                          <h1> Show Details</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4 bg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </button>
                    )}
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
// https://www.youtube.com/watch?v=UEJuNHOd8Dw
// key UJa1zUYegqo
