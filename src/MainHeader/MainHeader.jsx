import React, { useEffect, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { PiSunHorizon } from "react-icons/pi";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { TbHome } from "react-icons/tb";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Dialog, DialogHeader, DialogFooter } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { IoMdFilm } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../Redux/Slices/movieDetails";
import { Avatar } from "@material-tailwind/react";
import { searchSeries } from "../Redux/Slices/SearchseriesDetils";
import { GoXCircleFill } from "react-icons/go";
import "../MainHeader/Header.css";

const MainHeader = () => {
  const { searchResult } = useSelector((state) => state.filmsDetails);
  const { tvsearch, loading } = useSelector((state) => state.seriesSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [thems, setThems] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [swich, setswich] = useState(false);
  const handleOpen = (info) => {
    setOpen(!open);
  };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [thems]);

  function setDarkTheme() {
    localStorage.theme = "dark";
    setThems(!thems);
  }

  function setLightTheme() {
    localStorage.theme = "light";
    setThems(!thems);
  }

  useEffect(() => {
    dispatch(searchMovie(search));
    dispatch(searchSeries(search));
  }, [search, swich]);

  const swichSearch = () => {
    if (sessionStorage.s == "movie") {
      sessionStorage.s = "series";
      setswich(!swich);
    } else {
      sessionStorage.s = "movie";
      setswich(!swich);
    }
  };

  function NavList() {
    return (
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
        <Typography
          onClick={() => navigate("/")}
          as="a"
          href="#"
          variant="small"
          className="font-medium dark:text-cyan-300 text-black"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold text-[1.2em] text ">
            Home
            <TbHome className="text-2xl" />
          </ListItem>
        </Typography>
        <Typography
          onClick={() => navigate("/series")}
          as="a"
          href="#"
          variant="small"
          className="font-medium dark:text-cyan-300 text-black"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold text-[1.2em] text ">
            series
          </ListItem>
        </Typography>
        <Typography
          onClick={() => navigate("/movie")}
          as="a"
          href="#"
          variant="small"
          className="font-medium dark:text-cyan-300 text-black"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold text-[1.2em] text ">
            Movie
            <IoMdFilm className="text-2xl" />
          </ListItem>
        </Typography>
        <Typography as="a" href="#" variant="small" className="font-medium">
          <ListItem
            onClick={() => navigate("/contectUS")}
            className="flex items-center gap-2 py-2 pr-4  dark:text-cyan-300 font-semibold text-[1.2em] text-black"
          >
            Contact Us
            <BsFillTelephoneInboundFill />
          </ListItem>
        </Typography>
      </List>
    );
  }
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="sticky top-0 z-10">
      <Navbar className="mx-auto max-w-full px-4 py-2 bg-blue-gray-500 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            onClick={() => navigate("/")}
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-2xl font-semibold text-white dark:text-cyan-400 "
          >
            Movies
          </Typography>{" "}
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            {sessionStorage.s == "movie" ? (
              <button onClick={swichSearch} className="btn btn-error">
                search-series
              </button>
            ) : (
              <button className="btn btn-info" onClick={swichSearch}>
                search-movie
              </button>
            )}
            {/* search for Movie */}
            {sessionStorage.s == "movie" && (
              <>
                <input
                  onClick={handleOpen}
                  type="text"
                  placeholder="click to search"
                  className="input input-bordered input-info w-full max-w-xs"
                />

                <Dialog
                  className="w-full h-[50vh] overflow-auto touch-auto bg-red-500"
                  open={open}
                >
                  <DialogHeader>
                    {" "}
                    <GoXCircleFill
                      onClick={handleOpen}
                      className=" cursor-pointer text-black me-4"
                    />
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="Search_Movies"
                      className="input input-bordered input-info w-full max-w-xm"
                    />
                  </DialogHeader>
                  {
                    <div>
                      {searchResult.map((info, index) => (
                        <div key={index}>
                          <List className="flex flex-row bg-black">
                            <Avatar
                              src={`https://media.themoviedb.org/t/p/w440_and_h660_face${info.poster_path}`}
                              alt="avatar"
                              size="md"
                            />
                            <ListItem className="bg-black">
                              {info.original_title}
                            </ListItem>
                          </List>
                        </div>
                      ))}
                    </div>
                  }
                  <DialogFooter>
                    <Button
                      variant="text"
                      color="red"
                      onClick={handleOpen}
                      className="mr-1"
                    >
                      <span>Cancel</span>
                    </Button>
                  </DialogFooter>
                </Dialog>
              </>
            )}
            {/* search for series */}
            {sessionStorage.s == "series" && (
              <>
                <input
                  onClick={handleOpen}
                  type="text"
                  placeholder="click to search"
                  className="input input-bordered input-error w-full max-w-xs"
                />

                <Dialog
                  className="w-full h-[50vh] overflow-auto touch-auto"
                  open={open}
                >
                  <DialogHeader>
                    <GoXCircleFill
                      onClick={handleOpen}
                      className=" cursor-pointer text-black me-4"
                    />

                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="Search-Series"
                      className="input input-bordered input-info w-full max-w-xm"
                    />
                  </DialogHeader>
                  <div>
                    {tvsearch.map((info, index) => (
                      <div key={index}>
                        <List className="flex flex-row">
                          <Avatar
                            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${info.poster_path}`}
                            alt="avatar"
                            size="md"
                          />
                          <ListItem>{info.original_name}</ListItem>
                        </List>
                      </div>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button
                      variant="text"
                      color="red"
                      onClick={handleOpen}
                      className="mr-1"
                    >
                      <span>Cancel</span>
                    </Button>
                  </DialogFooter>
                </Dialog>
              </>
            )}

            <Button variant="gradient" size="sm">
              Sign In
            </Button>

            <div
              className="form-control"
              onClick={
                localStorage.theme == "dark" ? setLightTheme : setDarkTheme
              }
            >
              <label className="label cursor-pointer ">
                <input
                  type="checkbox"
                  className="toggle me-4 "
                  defaultChecked
                />
                {localStorage.theme == "dark" ? (
                  <button disabled>
                    <PiSunHorizon className="text-3xl text-white font-semibold" />
                  </button>
                ) : (
                  <button disabled>
                    <BsMoonStars className="text-3xl text-white font-semibold" />
                  </button>
                )}
              </label>
            </div>
          </div>
          <IconButton
            variant="text"
            color="white"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="gradient" size="sm">
              Sign In
            </Button>
          </div>
          <div
            className="form-control w-[25%] mt-4"
            onClick={
              localStorage.theme == "dark" ? setLightTheme : setDarkTheme
            }
          >
            <label className="label cursor-pointer flex justify-start">
              <input type="checkbox" className="toggle me-4 " defaultChecked />
              {localStorage.theme == "dark" ? (
                <button disabled>
                  <PiSunHorizon className="text-3xl text-white font-semibold" />
                </button>
              ) : (
                <button disabled>
                  <BsMoonStars className="text-3xl text-white font-semibold" />
                </button>
              )}
            </label>
          </div>
          {sessionStorage.s == "movie" ? (
            <button onClick={swichSearch} className="btn btn-error">
              search-series
            </button>
          ) : (
            <button className="btn btn-info" onClick={swichSearch}>
              search-movie
            </button>
          )}
          {/* search for Movie */}
          {sessionStorage.s == "movie" && (
            <>
              <input
                onClick={handleOpen}
                type="text"
                placeholder="click to search"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <Dialog
                className="w-full h-[50vh] overflow-auto touch-auto"
                open={open}
              >
                <DialogHeader>
                  <GoXCircleFill
                    onClick={handleOpen}
                    className="  cursor-pointer text-black me-4"
                  />

                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search_Movies"
                    className="input input-bordered input-info w-full max-w-xm"
                  />
                </DialogHeader>
                {
                  <div>
                    {searchResult.map((info, index) => (
                      <div
                        onClick={() => navigate(`/moviedetails/${info.id}`)}
                        key={index}
                      >
                        <List className="flex flex-row">
                          <Avatar
                            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${info.poster_path}`}
                            alt="avatar"
                            size="lg"
                          />
                          <ListItem className="text-xl text-black font-bold">
                            {info.original_title}
                          </ListItem>
                        </List>
                      </div>
                    ))}
                  </div>
                }
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1 bg-black"
                  >
                    <span>Cancel</span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </>
          )}
          {/* search for series */}
          {sessionStorage.s == "series" && (
            <>
              <input
                onClick={handleOpen}
                type="text"
                placeholder="click to search"
                className="input input-bordered input-error w-full max-w-xs"
              />

              <Dialog
                className="w-full h-[50vh] overflow-auto touch-auto"
                open={open}
              >
                <DialogHeader>
                  <GoXCircleFill
                    onClick={handleOpen}
                    className=" cursor-pointer  text-black me-4"
                  />

                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search-Series"
                    className="input input-bordered input-info w-full max-w-xm"
                  />
                </DialogHeader>
                {tvsearch.map((info, index) => (
                  <div key={index}>
                    <List
                      onClick={() => navigate(`/SeriesDetailes/${info.id}`)}
                      className="flex flex-row"
                    >
                      <Avatar
                        src={`https://media.themoviedb.org/t/p/w440_and_h660_face${info.poster_path}`}
                        alt="avatar"
                        size="lg"
                      />
                      <ListItem className="text-xl text-black font-bold">
                        {info.original_name}
                      </ListItem>
                    </List>
                  </div>
                ))}
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1 bg-black"
                  >
                    <span>Cancel</span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainHeader;
