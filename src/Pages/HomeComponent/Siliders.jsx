// import { useSelect } from "@material-tailwind/react";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { PiTelevisionDuotone } from "react-icons/pi";
import { TbMovie } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlay } from "react-icons/fa6";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import "../HomeComponent/Slider.css";

const Siliders = ({ data, name, viedoclip, handelClips }) => {
  const { loading } = useSelector((state) => state.movies);
  const navigition = useNavigate();
  const [openTop, setOpenTop] = React.useState(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const openDrawerTop = () => setOpenTop(true);

  const closeDrawerTop = () => setOpenTop(false);
  return (
    <div>
      <div className="flex items-center justify-center my-[4em]">
        {name == "movies" ? (
          <TbMovie className="text-4xl" />
        ) : (
          <PiTelevisionDuotone className="text-4xl" />
        )}
        <h1 className="text-4xl font-semibold">{name}</h1>
      </div>
      {loading ? (
        <div className="flex justify-center">
          <ReactLoading type={"bars"} color={`gray`} height={100} width={70} />
        </div>
      ) : (
        <Slider {...settings} className="">
          {data.map((info, index) => (
            <div key={index}>
              <div className="">
                <Popover>
                  <PopoverHandler>
                    <Button>
                      <img
                        src={`https://media.themoviedb.org/t/p/w440_and_h660_face${info.poster_path}`}
                        alt=""
                      />
                    </Button>
                  </PopoverHandler>
                  <PopoverContent className="dark:bg-white dark:text-black bg-black text-white w-[20%]">
                    <div>
                      <button
                        onClick={() => {
                          openDrawerTop();
                          handelClips(name, info.id);
                        }}
                        className="flex items-center gap-1 flex-wrap justify-center"
                      >
                        <FaPlay className="" />
                        <h1> See Trailer</h1>
                      </button>
                      {/* Video */}
                      <Drawer
                        placement="top"
                        open={openTop}
                        onClose={closeDrawerTop}
                        className="p-4 bg-black"
                      >
                        <div className="mb-10 flex items-start justify-center">
                          <IconButton
                            variant="text"
                            className="text-cyan-300"
                            onClick={closeDrawerTop}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={4}
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </IconButton>
                          {viedoclip ? (
                            <iframe
                              width="560"
                              height="250"
                              src={`https://www.youtube.com/embed/${viedoclip}?si=RSgMgDNRJ6lOVL8a`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <div>
                              <h1 className="text-center text-cyan-300 text-2xl">
                                No Video Founded
                              </h1>
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbc8Tn29oMZwVFjeJEeggBmpi10CgASijhtAhlBz0gw&s"
                                alt=""
                              />
                            </div>
                          )}
                        </div>
                      </Drawer>

                      {/* Video */}
                    </div>
                    <div className="">
                      <button
                        onClick={() => {
                          if (name == "movies") {
                            navigition(`/moviedetails/${[info.id]}`);
                          } else if (name == "Tv-Series") {
                            navigition(`/SeriesDetailes/${[info.id]}`);
                          }
                        }}
                        className=" xs:me-3 sm:me-9 md:me-0 flex items-center gap-1 mt-2  flex-wrap justify-center"
                      >
                        <HiDotsVertical />
                        <h1 className="">Details</h1>
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Siliders;
//   onClick={() => {
//   navigition(`/moviedetails/${info.id}`);
// }}
