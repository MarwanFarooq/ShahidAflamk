import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  allMoviesDetails,
  backdrops,
  castinginfo,
  keywordmovie,
  movieextrnalID,
  recomindition,
  theMovieReviews,
  // theSeriesReviews,
} from "../../Redux/Slices/movieDetails";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { RiStarSLine } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import "../Moviescomponent/moviesdetails.css";
import { render } from "react-dom";
import ReactStars from "react-stars";
import ReactLoading from "react-loading";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { videos } from "../../Redux/Slices/AllMovies";
import { clips } from "../../Redux/Slices/clips";
import ReactReadMoreReadLess from "react-read-more-read-less";

const MovieDetails = () => {
  const navigition = useNavigate();
  const { id } = useParams();
  const {
    alldata,
    casting,
    crew,
    Review,
    backdropsimg,
    posters,
    Recommendations,
    movieextrnalIDinfo,
    loading,
    key,
    Recominditionloading,
  } = useSelector((state) => state.filmsDetails);
  const { allmovie } = useSelector((state) => state.videosinfo);
  const { videoLink } = useSelector((state) => state.clipsdata);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allMoviesDetails(id));
    dispatch(castinginfo(id));
    dispatch(theMovieReviews(id));
    dispatch(videos(id));
    dispatch(backdrops(id));
    dispatch(recomindition(id));
    dispatch(clips(id));
    dispatch(movieextrnalID(id));
    dispatch(keywordmovie(id));
  }, [id]);
  console.log(id);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const data = [
    {
      label: "Youtube",
      value: "y",
      desc: (
        <div className="flex overflow-x-auto">
          {allmovie.map((info, index) => (
            <div key={index} className="">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${info.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "BackDrops",
      value: "B",
      desc: (
        <div className="flex overflow-x-auto gap-[4em]">
          {backdropsimg.map((info, index) => (
            <div key={index}>
              <img
                className="max-w-96"
                src={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${info.file_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Posters",
      value: "P",
      desc: (
        <div className="flex overflow-x-auto">
          {posters.map((info, index) => (
            <div key={index} className="card w-[96]  shadow-xl">
              <figure className="w-[90%]">
                <img
                  className="max-w-96"
                  src={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${info.file_path}`}
                  alt=""
                />
              </figure>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = React.useState("html");
  const seconddata = [
    {
      label: "Recommendations",
      value: "html",
      desc: (
        <div>
          {Recominditionloading ? (
            <div className="flex justify-center">
              <ReactLoading
                type={"bars"}
                color={`gray`}
                height={100}
                width={70}
              />
            </div>
          ) : (
            <div className="flex overflow-x-auto gap-[4em] hover:poi ">
              {Recommendations.map((info, index) => (
                <div key={index}>
                  <img
                    className="max-w-96"
                    src={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${info.backdrop_path}`}
                    alt=""
                  />
                  <div className="bg-gray-800 flex flex-col items-center justify-around">
                    <h1 className="text-white text-center pt-10">
                      <span className="text-xl font-semibold">
                        {" "}
                        MovieName:{" "}
                      </span>
                      <span className="text-teal-300 text-[1.2em] font-semibold">
                        {info.original_title}
                      </span>
                    </h1>
                    <h1 className="text-white text-center text-[1.3em] font-semibold">
                      Rate:
                      <span className="text-teal-300 text-[1.2em] font-semibold">
                        {info.vote_average}
                      </span>
                    </h1>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                      value={info.vote_average / 2}
                    />
                    <button
                      onClick={() => {
                        navigition(`/moviedetails/${[info.id]}`);
                      }}
                      className="btn glass text-white"
                    >
                      Show-Movie
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <ReactLoading type={"bars"} color={`gray`} height={100} width={70} />
        </div>
      ) : (
        <div className="dark:bg-black ">
          <div className="">
            <div className="details ">
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
                <div className="sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:me-[3em] md:me-0 sm:ms-0">
                  <img
                    className="  ms-[5em] w-[50%] sm:w-[45%] sm:ms-0  md:w-[80%]  md:ms-[2em] md:mt-[6em] lg:mt-[2em]  lg:w-[70%]"
                    src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${alldata.poster_path}`}
                    alt=""
                  />
                  <div className=" flex flex-col w-full mt-[3em] sm:items-center sm:bg-white md:bg-transparent lg:bg-tr sm:dark:bg-black md:dark:bg-transparent lg dark::bg-transparent sm:text-[0.8em] md:text-[1em]  ">
                    <h1 className=" text-cyan-300 text-3xl font-bold">
                      {alldata.title}
                    </h1>
                    {alldata.length == 0 ? (
                      ""
                    ) : (
                      <div className="flex font-semibold flex-wrap dark:text-white ">
                        <h1 className="me-2">{alldata.release_date}</h1>
                        <br />
                        <FaRegHandPointRight className="text-yellow-400 mt-2" />
                        {alldata.genres.map((info, index) => (
                          <h1 key={index}>-{info.name}</h1>
                        ))}
                        <FaRegHandPointLeft className="text-yellow-400 mt-2" />
                        <h1 className="ms-4">{alldata.runtime}:Min</h1>
                      </div>
                    )}
                    <h1 className=" text-cyan-300 text-2xl ">overview:</h1>
                    <p className="dark:text-white text-black font-semibold  text-center text-[0.9em] mx-10">
                      {alldata.overview}
                    </p>
                    {/*  */}
                    <div className=" w-full">
                      <h1 className=" text-cyan-300 text-3xl font-bold text-center">
                        Casting:
                      </h1>
                      <div>
                        <div className="flex gap-[4em] justify-center mt-3">
                          {casting.length >= 2 && (
                            <div className="flex flex-col items-center">
                              <h1 className="text-[1em] font-semibold dark:text-white">
                                {casting[0].name}{" "}
                              </h1>
                              <h1 className="text-yellow-700">
                                {casting[0].known_for_department}
                              </h1>
                            </div>
                          )}
                          {casting.length >= 2 && (
                            <div className="flex flex-col items-center">
                              <h1 className="text-[1em] font-semibold dark:text-white">
                                {casting[1].name}
                              </h1>
                              <h1 className="text-yellow-700">
                                {casting[1].known_for_department}
                              </h1>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-[4em] justify-center mt-3 mx-10">
                          {crew.length >= 2 && (
                            <div className="flex flex-col items-center">
                              <h1 className="text-[1em] font-semibold dark:text-white">
                                {crew[0].name}{" "}
                              </h1>
                              <h1 className="text-yellow-700">
                                {crew[0].known_for_department}
                              </h1>
                            </div>
                          )}
                          {crew.length >= 2 && (
                            <div className="flex flex-col items-center">
                              <h1 className="text-[1em] font-semibold dark:text-white">
                                {crew[1].name}
                              </h1>
                              <h1 className="text-yellow-700">
                                {crew[1].known_for_department}
                              </h1>
                            </div>
                          )}
                          {crew.length >= 2 && (
                            <div className="flex flex-col items-center">
                              <h1 className="text-[1em] font-semibold dark:text-white">
                                {crew[2].name}
                              </h1>
                              <h1 className="text-yellow-700">
                                {crew[2].known_for_department}
                              </h1>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-around gap-10 mt-[3em] mx-[2em] flex-wrap ">
                        <div className="flex flex-col items-center">
                          <button>
                            <IoMdAddCircle className="text-green-500 text-3xl mb-2" />
                          </button>
                          <h1 className=" font-semibold  dark:text-white  ">
                            Add To Watch
                          </h1>
                        </div>
                        <div className="flex flex-col items-center">
                          <button>
                            <RiStarSLine className="text-yellow-500 text-3xl mb-2" />
                          </button>
                          <h1 className=" font-semibold dark:text-white text-black">
                            Rate
                          </h1>
                        </div>
                        <div className="flex flex-col items-center">
                          <button>
                            <a
                              href={`https://www.youtube.com/watch?v=${videoLink}`}
                            >
                              <FaPlayCircle className="text-red-500 text-2xl mb-2 " />
                            </a>
                          </button>
                          <h1 className=" font-semibold dark:text-white text-black">
                            Play trailar
                          </h1>
                        </div>
                        <button
                          onClick={() => {
                            navigition(-1);
                          }}
                          className=" btn btn-wide bg-purple-700 text-white"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <figure>
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
                <img
                  className="h-[70vh] w-[100%] object-cover object-center "
                  src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${alldata.backdrop_path}`}
                  alt="nature image"
                />
              )}
            </figure>
          </div>

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
            <div className="md:grid md:grid-cols-2 sm:flex sm:flex-col ">
              <div className="flex overflow-x-scroll w-[100%] md:mt-[18em] sm:mt-[20em]">
                {casting.map((info, index) => (
                  <div
                    onClick={() => navigition(`/persondetails/${info.id}`)}
                    key={index}
                    className="     card w-96  shadow-xl bg-blue-gray-800"
                  >
                    <figure>
                      <img
                        className="mt-[1em]"
                        src={
                          info.profile_path
                            ? `https://media.themoviedb.org/t/p/w138_and_h175_face/${info.profile_path}`
                            : "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
                        }
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-center text-cyan-400">
                        {info.name}
                      </h2>
                      <p className="text-center text-cyan-400">
                        {info.known_for_department}
                      </p>
                      <p className="text-cyan-400">
                        character:{info.character}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dark:text-teal-400 text-black  md:mt-[18em] sm:mt-5 flex flex-col gap-6 items-center ">
                <div>
                  <Link to={`/castMovieInfo/${id}`}>
                    <h1 className="text-purple-400 font-bold text-2xl">
                      Show FullCast&Crwa
                    </h1>
                  </Link>
                </div>
                <div className="flex gap-10">
                  <a
                    href={`https://web.facebook.com/${movieextrnalIDinfo.facebook_id}`}
                  >
                    <ImFacebook2 className="text-2xl hover:text-blue-700 " />
                  </a>{" "}
                  <a
                    href={`https://www.instagram.com/${movieextrnalIDinfo.instagram_id}/ `}
                  >
                    <FaInstagram className="text-2xl hover:text-orange-400 " />
                  </a>
                  <a
                    href={` https://twitter.com/${movieextrnalIDinfo.twitter_id}`}
                  >
                    <FaTwitter className="text-2xl hover:text-blue-700 " />
                  </a>
                  {/* <a href={`https://www.${movieextrnalIDinfo.facebook_id}.net/ `}> */}
                  <IoHome className="text-2xl hover:text-teal-900 " />
                  {/* </a>   */}
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl dark:text-white font-semibold">
                    Status
                  </h1>
                  <p className="text-green-400 font-semibold">
                    {alldata.status}
                  </p>
                  <h1 className="text-2xl dark:text-white  font-semibold">
                    Original Language
                  </h1>

                  {alldata.original_language ? (
                    <span className="text-green-400 font-semibold">
                      {alldata.spoken_languages[0]
                        ? alldata.spoken_languages[0].name
                        : alldata.original_language}
                    </span>
                  ) : (
                    <span className="text-red-400 font-bold ">
                      No Information
                    </span>
                  )}

                  <h1 className="text-2xl dark:text-white font-semibold ">
                    Budget
                  </h1>
                  {alldata.budget ? (
                    <span className="text-green-400 font-semibold">
                      {alldata.budget}
                    </span>
                  ) : (
                    <span className="text-red-400 font-bold ">
                      No Information
                    </span>
                  )}
                  <h1 className="text-2xl dark:text-white ">Revenue</h1>
                  <span className="text-red-400">
                    {alldata.revenue ? (
                      <span className="text-green-400 font-semibold">
                        {alldata.revenue}
                      </span>
                    ) : (
                      <span className="text-red-400 font-bold ">
                        No Information
                      </span>
                    )}
                  </span>
                </div>
                <div className="mx-7 flex flex-wrap justify-center">
                  {key.map((info, index) => (
                    <button
                      key={index}
                      className="btn btn-outline dark:btn-warning btn-primary  "
                    >
                      {info.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* social */}
          <h1 className="dark:text-purple-400 font-extrabold text-center mt-[2em]  text-[3em] ">
            Reviews
          </h1>

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
            <div className="my-[4em] flex justify-center  ">
              {Review.length == 0 ? (
                <div className="chat-bubble  mb-[4em]">
                  <h1>
                    <span className="text-2xl    font-semibold text-red-400">
                      NO Reviews
                    </span>
                  </h1>
                </div>
              ) : (
                <div className="chat chat-start ">
                  <div className="chat-image avatar  ">
                    <div className="w-10 rounded-full">
                      <h1 className="dark:text-white text-black text-center font-semibold">
                        {Review[0] ? Review[0].author[0] : ""}
                      </h1>
                    </div>
                  </div>

                  <div className="chat-bubble mb-[4em] lg:w-[100%] md:w-[100%]  sm:w-[50%]">
                    <h1>
                      <span className="text-2xl font-semibold text-red-400">
                        Typed By
                      </span>
                      <span className="text-[1.6em]">
                        {" "}
                        :{Review[0] ? Review[0].author : ""}
                      </span>
                    </h1>
                    <span className="text-cyan-200 text-3xl">content-:</span>
                    <p className="contain-paint">
                      {Review[0] ? (
                        <ReactReadMoreReadLess
                          charLimit={200}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                        >
                          {Review[0].content}
                        </ReactReadMoreReadLess>
                      ) : (
                        ""
                      )}
                    </p>
                    <div className="text-center">
                      <p className="text-2xl text-center text-white font-extrabold">
                        updated_at
                      </p>
                      <span className="text-blue-800 font-semibold ">
                        {Review[0] ? Review[0].created_at : ""}
                      </span>
                    </div>
                  </div>
                  {/* second comment */}
                  {Review[1] && (
                    <div className=" lg:w-[100%] md:w-[100%]  sm:w-[60%]">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full ">
                          <h1 className="dark:text-white text-black text-center font-semibold">
                            {/* {Review[0] ? Review[1].author[0] : ""} */}
                          </h1>
                        </div>
                      </div>
                      <div className="chat-bubble">
                        <h1>
                          <span className="text-2xl font-semibold text-red-400">
                            Typed By
                          </span>
                          <span className="text-[1.6em]">
                            {" "}
                            :{Review[1] ? Review[1].author : ""}
                          </span>
                        </h1>
                        <span className="text-cyan-200 text-3xl">
                          content-:
                        </span>
                        <p className="contain-paint">
                          {Review[1] ? (
                            <ReactReadMoreReadLess
                              charLimit={200}
                              readMoreText={"Read more ▼"}
                              readLessText={"Read less ▲"}
                            >
                              {Review[1].content}
                            </ReactReadMoreReadLess>
                          ) : (
                            ""
                          )}
                        </p>
                        <div className="text-center">
                          <p className="text-2xl text-center text-white font-extrabold">
                            updated_at
                          </p>
                          <span className="text-blue-800 font-semibold ">
                            {Review[1] ? Review[1].created_at : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <div className="flex justify-center w-[50%]">
            {Review.length > 2 ? (
              <button
                onClick={() => navigition(`/moviesreviews/${id}`)}
                className="btn btn-active btn-accent"
              >
                View All Comments
              </button>
            ) : (
              <button className="btn btn-active btn-defult">
                No More Comments
              </button>
            )}
          </div>

          {/* alldetails  */}
          <div className=" cursor-pointer  mt-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 sm:flex flex-col ">
            <Tabs value="y">
              <TabsHeader className="p-0  ">
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    className=" font-semibold dark:bg-black bg-purple-300 text-black  dark:text-purple-300      "
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
          {/* recomindation */}
          <div className=" cursor-pointer w-[100%] mt-[6em] ">
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
              >
                {seconddata.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className="dark:text-purple-300 dark:bg-black text-[1.6em] bg-purple-300 text-black   "
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {seconddata.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
