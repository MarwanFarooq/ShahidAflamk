import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { theSeriesReviews } from "../../Redux/Slices/seriesDetails";
import "../AllReviews/review.css";
import { useDispatch } from "react-redux";
import { ReactReadMoreReadLess } from "react-read-more-read-less";
import { Typography, Avatar, Rating } from "@material-tailwind/react";
import ReactStars from "react-stars";

const SeriesReviews = () => {
  const { SeriesReviews } = useSelector((state) => state.seriesDataReview);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(theSeriesReviews(id));
  }, []);
  console.log(SeriesReviews);
  return (
    <div className="px-8 text-center">
      <h1 className="text-center text-bolder my-5 text-purple-400 dark:text-cyan-300 text-3xl ">
        All Comment
      </h1>
      {SeriesReviews.map((info, index) => (
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
              <span className="text-xl">
                {info?.author[0] + info?.author[1]}
              </span>
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

export default SeriesReviews;
