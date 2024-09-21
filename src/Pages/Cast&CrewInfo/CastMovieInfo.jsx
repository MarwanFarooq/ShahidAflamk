import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Moviescredit } from "../../Redux/Slices/Credits";
import { allMoviesDetails } from "../../Redux/Slices/movieDetails";

const CastMovieInfo = () => {
  const navigition = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movieid, cast, crew } = useSelector((state) => state.allcreditors);
  const { alldata } = useSelector((state) => state.filmsDetails);
  useEffect(() => {
    dispatch(Moviescredit(id));
    dispatch(allMoviesDetails(id));
  }, []);
  console.log(alldata);
  console.log(crew);
  console.log(cast);

  return (
    <div>
      <div className="w-[100%] flex justify-center mt-[4em] bg-gray-700 ">
        <div className="avatar">
          <div className="w-[40%] rounded ">
            {
              <img
                src={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${alldata.backdrop_path}`}
              />
            }
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center h-[30vh] ">
              <h1 className=" ms-[1em] text-4xl font-semibold text-white ">
                {alldata.title}
              </h1>
              <button
                onClick={() => {
                  navigition(-1);
                }}
                className="btn btn-active btn-link"
              >
                Back To Main
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[4em]">
        <h1 className="text-center font-extrabold text-4xl text-purple-400">
          {`cast(${cast.length})`}
        </h1>
        <div className=" sm:flex sm:flex-col md:grid md:grid-cols-2">
          {cast.map((info, index) => (
            <div key={index} className="mt-[4em] ms-10">
              <div className="avatar">
                <div className="w-[24%] rounded">
                  {info.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${info.profile_path}`}
                    />
                  ) : (
                    <img
                      src="https://rankenjordan.org/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png"
                      alt=""
                    />
                  )}
                </div>
                <div className="bg-gray-700 text-white w-[50%] text-center ">
                  <p className="text-2xl sm:text-[1em] font-semibold">Name</p>
                  <p className="text-xl sm:text-[1em] text-cyan-400">
                    {" "}
                    {info.name}
                  </p>
                  <span className="font-bold sm:text-[1em] md:text-2xl">
                    character:
                  </span>
                  <span className="text-xl sm:text-[1em] text-cyan-400">
                    {info.character}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-center font-extrabold text-4xl text-purple-400">
        {`crew(${crew.length})`}
      </h1>
      {crew.map((info, index) => (
        <div key={index} className="mt-[4em]">
          <div className="avatar">
            <div className="w-[24%] rounded">
              {info.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${info.profile_path}`}
                />
              ) : (
                <img
                  src="https://rankenjordan.org/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png"
                  alt=""
                />
              )}
            </div>
            <div className="bg-gray-700 text-white w-[50%] text-center ">
              <p className="text-2xl sm:text-[1em] font-semibold">Name</p>
              <p className="text-xl sm:text-[1em] text-cyan-400">
                {" "}
                {info.name}
              </p>
              <span className=" font-bold text-xl sm:text-[1em]">job:</span>
              <span className="text-xl sm:text-[1em]">{info.job}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CastMovieInfo;
