import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { theMovieReviews } from "../../Redux/Slices/movieDetails";
import Loading from "react-loading";
import { ReactReadMoreReadLess } from "react-read-more-read-less";
import { Typography, Avatar, Rating } from "@material-tailwind/react";
import ReactStars from "react-stars";

const MoviesReviews = () => {
  const { Review } = useSelector((state) => state.filmsDetails);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(theMovieReviews(id));
  }, []);
  return (
    <div className="px-8 text-center">
      <h1 className="text-center text-bolder my-5 text-purple-400 dark:text-cyan-300 text-3xl ">
        All Comment
      </h1>
      {Review.map((info, index) => (
        <div key={index} className="dark:text-cyan-400 text-black font-bold">
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="mb-6 mx-[2em] font-bold dark:text-white text-dark "
          >
            {info.content}
          </Typography>
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-16">
              <span className="text-xl">{info.author[0] + info.author[1]}</span>
            </div>
          </div>
          <Typography variant="h6" className="mt-4">
            {info.author}
          </Typography>
          <Typography className="mb-4 font-normal dark:text-white  ">
            {info.author_details.username}
          </Typography>
          <div>
            <p>Rating comment</p>
            <ReactStars
              className="flex justify-center"
              count={6}
              size={24}
              color2={"#ffd700"}
              value={0}
            />
            <h1 className=""> created_at </h1>
            <p className="mb-12">{info.created_at}</p>
          </div>
          <hr className="w-[100%] h-[0.3em] mb-7 dark:bg-cyan-400 bg-purple-300 " />
        </div>
      ))}
    </div>
  );
};

export default MoviesReviews;
