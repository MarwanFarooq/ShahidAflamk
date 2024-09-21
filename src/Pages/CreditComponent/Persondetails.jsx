import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  creditGetInfo,
  externalIDs,
  movieWorkIn,
  seriesWorkIn,
} from "../../Redux/Slices/pepoledetails";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import "../CreditComponent/persondetails.css";
import { FaTiktok } from "react-icons/fa6";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Persondetails = () => {
  const { id } = useParams();
  const { creditData, moveWorkIninfo, seriesWorkIninfo, externalIDsinfo } =
    useSelector((state) => state.allCreditInfo);
  const navigition = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(creditGetInfo(id));
    dispatch(movieWorkIn(id));
    dispatch(seriesWorkIn(id));
    dispatch(externalIDs(id));
  }, []);
  console.log(externalIDsinfo);

  return (
    <div>
      <div className="md:grid md:grid-cols-2 sm:flex sm:flex-col ">
        <div className=" flex flex-col items-center">
          <div className="avatar">
            <div className=" mt-8 rounded ">
              <img
                width={"60%"}
                src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${creditData.profile_path}`}
              />
            </div>
          </div>
          <div className="flex gap-10 mt-[3em] me-[7em] ">
            <a
              href={`https://web.facebook.com/${externalIDsinfo?.facebook_id}`}
            >
              <ImFacebook2 className="text-2xl hover:text-blue-700 dark:text-white dark:hover:text-blue-700 " />
            </a>{" "}
            <a
              href={`https://www.instagram.com/${externalIDsinfo?.instagram_id}/ `}
            >
              <FaInstagram className="text-2xl hover:text-orange-400 dark:text-white dark:hover:text-orange-400 " />
            </a>
            <a href={` https://twitter.com/${externalIDsinfo?.twitter_id}`}>
              <FaTwitter className="text-2xl hover:text-blue-700  dark:text-white dark:hover:text-blue-700  " />
            </a>
            <a href={`https://www.${externalIDsinfo?.tiktok_id}.net/ `}>
              <FaTiktok className="text-2xl hover:text-red-400 dark:text-white dark:hover:text-red-300  " />
            </a>
          </div>
          <div className="text-center me-[6.4em] mt-6 ">
            <h1 className="text-3xl text-cyan-400 dark:text-white font-semibold ">
              Personal info
            </h1>
            <p className="text-xl text-green-400 dark:text-white font-semibold ">
              Know-for
            </p>
            <p className="dark:text-purple-300 font-semibold">
              {creditData.known_for_department}
            </p>
            <p className="text-xl text-green-400 dark:text-white font-semibold ">
              Known Credits
            </p>
            <p className="dark:text-purple-300  font-semibold">
              {moveWorkIninfo.length}
            </p>
            <p className="text-xl text-green-400 dark:text-white font-semibold ">
              Gender
            </p>
            <p className="dark:text-purple-300  font-semibold">
              {creditData.gender == 1 ? "female" : "male"}
            </p>
            <p className="text-xl text-green-400 dark:text-white font-semibold ">
              Born in
            </p>
            <p className="dark:text-purple-300  font-semibold">
              {creditData.birthday}
            </p>
            <p className="text-xl text-green-400 dark:text-white font-semibold ">
              Place of Birth
            </p>
            <p className="dark:text-purple-300  font-semibold">
              {creditData.place_of_birth}
            </p>
            <p className="text-xl text-green-400 dark:text-white font-semibold ">
              Also Known As
            </p>
            <div>
              {creditData.also_known_as &&
                creditData.also_known_as.map((info, index) => (
                  <p
                    key={index}
                    className="dark:text-purple-300  font-semibold"
                  >
                    {info}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="dark:text-white text-cyan-600 text-2xl font-bold my-[2em] mx-5">
            {creditData.name}
          </h1>
          <h1 className="text-purple-400 text-2xl font-bold text-center">
            Biography:
          </h1>
          <p className=" dark:text-white mx-[3em] text-center font-medium">
            {creditData.biography && (
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
              >
                {creditData.biography}
              </ReactReadMoreReadLess>
            )}
          </p>
          <div>
            <h1 className="text-4xl font-sans text-purple-400 font-semibold">
              Work For
            </h1>
            <p className="dark:text-white mx-[3em] text-4xl mt-4 text-center font-medium">
              Movies
            </p>
            <div className="flex overflow-x-scroll w-[100%]  mt-5 ">
              {moveWorkIninfo.map((info, index) => (
                <div
                  onClick={() => navigition(`/moviedetails/${info.id}`)}
                  key={index}
                  className=" pointer-events-auto card w-96  shadow-xl bg-blue-gray-800"
                >
                  <figure>
                    <img
                      className="mt-[1em]"
                      src={
                        info.poster_path
                          ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${info.poster_path}`
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
                    <p className="text-cyan-400">character:{info.character}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="dark:text-white mx-[3em] text-4xl mt-4 text-center font-medium">
              Series
            </p>
            <div className="flex overflow-x-scroll w-[100%]  mt-5 ">
              {seriesWorkIninfo.map((info, index) => (
                <div
                  onClick={() => navigition(`/SeriesDetailes/${info.id}`)}
                  key={index}
                  className=" pointer-events-auto card w-96  shadow-xl bg-blue-gray-800"
                >
                  <figure>
                    <img
                      className="mt-[1em]"
                      src={
                        info.poster_path
                          ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${info.poster_path}`
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
                    <p className="text-cyan-400">character:{info.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Persondetails;
