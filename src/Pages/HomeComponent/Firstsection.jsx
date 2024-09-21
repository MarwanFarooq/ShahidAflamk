import React from "react";
import { Button } from "@material-tailwind/react";
const Firstsection = () => {
  return (
    <div className="bg">
      <div className="text-center font-bold text-4xl mt-[1em]">Home</div>
      <div className="flex justify-around sm:text-[0.8em] md:text-3xl flex-wrap">
        <div className="flex flex-col text-center my-[3em] sm:mx-4 ">
          <h1 className=" ">SORT BY</h1>
          <div className="flex gap-5 flex-wrap justify-center sm:ms-4 ">
            <Button variant="gradient">Title</Button>
            <Button variant="gradient">Popularety</Button>
            <Button variant="gradient">Date</Button>
            <Button variant="gradient">Rate</Button>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center  ">
          <h1 className="">SORT-ORDER</h1>
          <div className="flex gap-7 flex-wrap  sm:ms-[0.5rem] md:ms-6 justify-center">
            <Button variant="gradient">increment</Button>
            <Button variant="gradient">decrement</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
