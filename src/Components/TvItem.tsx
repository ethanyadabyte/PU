import React from "react";
import { Link } from "react-router-dom";
interface Movie {
  Id?: any;
  Type?: any;
  poster_path?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  first_air_date?: string;
  release_date?: string;
  status?: string;
  original_language?: string;
  runtime?: string;
  vote_average?: string;
  number_of_episodes?: any;
  number_of_seasons?: any;
  episode_run_time?: any;
}

export const TvItem = (props: Movie) => {
  let R = `${props.episode_run_time}`;
  let RT = `${R[0]}${R[1]}`;
  console.log(RT);
  return (
    <div className="flex justify-left mt-16 ml-10 w-11/12  text-gray-200 bg-gray-700 ">
      <img
        className=" rounded-lg  "
        src={"https://image.tmdb.org/t/p//w342" + props.poster_path}
        alt=""
      />
      <div className=" ml-10 mt-3 ">
        <p className="text-4xl mt-2   font-medium ">{props.original_name}</p>
        <p className="text-justify text-gray-400 text-xs w-8/12 mt-3">
          {props.overview}
        </p>
        <p className="text-xl mt-4 text-gray-400"></p>
        <div className="flex">
          <Link to={`/Player/${props.Id}/tv`}>
            <p className="h-10 w-20 rounded-2xl text-2xl bg-blue-500 mt-8 mb-0 pt-0.5 text-center  ">
              {"Play"}
            </p>
          </Link>
        </div>
        <div className="h-64 w-7/12 bg-gray-700 -mr-4 flex flex-linear rounded-2xl ">
          <div className="pt-10 pr-4 pl-0">
            <div className="p-4 ">
              <h1 className="">Language:</h1>
              <h1 className="text-gray-400">
                {props.original_language.toUpperCase()}
              </h1>
            </div>
            <div className="p-4">
              <h1 className="">RunTime:</h1>
              <h1 className="text-gray-400">{RT}</h1>
            </div>
          </div>
          <div className="pt-10 pl-5">
            <div className="p-4">
              <h1 className="">Status:</h1>
              <h1 className="text-gray-400">{props.status}</h1>
            </div>
            <div className="p-4">
              <h1 className="">Date Released:</h1>
              <h1 className="text-gray-400">
                {props.first_air_date}
                {props.release_date}
              </h1>
            </div>
          </div>
          <div className="pt-10 pl-5">
            <div className="p-4">
              <h1 className="">Seasons:</h1>
              <h1 className="text-gray-400">{props.number_of_seasons}</h1>
            </div>
            <div className="p-4">
              <h1 className="">Episodes:</h1>
              <h1 className="text-gray-400">{props.number_of_episodes}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-50 bg-gray-500"></div>
    </div>
  );
};
