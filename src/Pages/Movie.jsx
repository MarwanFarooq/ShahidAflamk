import React, { useEffect, useState } from "react";
import { apiMovies } from "../Redux/Slices/movies";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

const Movie = () => {
  const [page, setPage] = useState(1);
  const { moviesinfo, topMovies, loading } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const navigition = useNavigate();

  useEffect(() => {
    dispatch(apiMovies(page));
  }, [page]);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <ReactLoading type={"bars"} color={`gray`} height={100} width={70} />
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap mt-[4em] mx-6 gap-[6em] justify-center">
            {moviesinfo.map((info, index) => (
              <div
                key={index}
                className="card w-96 bg-black  dark:bg-white text-white dark:text-black shadow-xl"
              >
                <figure className="px-10 pt-10">
                  <img
                    src={`https://media.themoviedb.org/t/p/w440_and_h660_face${info.poster_path}`}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Titel:{info.original_title}!</h2>
                  <p>{info.overview}</p>
                  <div className="mb-[4em] flex gap-[4em]">
                    <p>
                      RATE:{" "}
                      <span className="dark:text-cyan-300 text-white">
                        {info.vote_average}
                      </span>{" "}
                    </p>
                    {info.vote_average <= 7.3 ? (
                      <div className="flex">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="dark:text-black" />
                      </div>
                    ) : info.vote_average <= 7.6 ? (
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
                    ) : info.vote_average <= 6 ? (
                      <div className="flex">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStarHalfStroke className="text-yellow-500" />
                        <FaStar className="dark:text-black" />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="card-actions">
                    <button
                      onClick={() => {
                        navigition(`/moviedetails/${[info.id]}`);
                      }}
                      className="btn btn-outline btn-accent"
                    >
                      Show Details
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
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[4em]">
            {page <= 1 ? (
              <button
                disabled
                className="join-item btn"
                onClick={() => setPage(page - 2)}
              >
                «
              </button>
            ) : (
              <button
                className="join-item btn"
                onClick={() => setPage(page - 2)}
              >
                «
              </button>
            )}
            {page <= 1 ? (
              <button
                className="join-item btn dark:btn-primary btn-info"
                onClick={() => setPage(page - 1)}
                disabled
              >
                Previous page
              </button>
            ) : (
              <button
                className="join-item btn   dark:btn-primary btn-info "
                onClick={() => setPage(page - 1)}
              >
                Previous page
              </button>
            )}
            <p className=" flex items-center mx-4 text-3xl font-semibold dark:text-cyan-300">
              {page}
            </p>
            <button
              className="join-item btn dark:btn-primary btn-info"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
            <button className="join-item btn" onClick={() => setPage(page + 2)}>
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
