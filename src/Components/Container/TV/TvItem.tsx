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
    <div className="flex justify-left mt-16 ml-10 w-11/12  text-gray-200 dark:bg-gray-700 ">
      <img
        className="rounded-lg shadow-2xl"
        src={"https://image.tmdb.org/t/p//w342" + props.poster_path}
        alt=""
      />
      <div className=" ml-10 mt-3">
        <p className="text-4xl mt-2 font-medium text-gray-700 dark:text-gray-200">
          {props.original_name}
        </p>
        <p className="text-justify text-gray-500 font-medium dark:text-gray-400 text-xs w-8/12 mt-3">
          {props.overview}
        </p>
        <p className="text-xl mt-4 text-gray-400"></p>
        <div className="flex ml-4">
          <Link to={`/Video/${props.Id}`}>
            <p className="h-10 w-20 rounded-lg text-2xl text-red-500 mt-8 mb-0 pt-0.5 text-center mr-4 border-2 border-red-500 hover:border-red-600 hover:text-red-600">
              {"Play"}
            </p>
          </Link>
          <Link to={`/Player/${props.Id}/tv`}>
            <p className="h-10 w-20 rounded-lg text-2xl text-blue-500 mt-8 mb-0 pt-0.5 text-center border-2 border-blue-500 hover:border-blue-600 hover:text-blue-600">
              {"Trailer"}
            </p>
          </Link>
        </div>
        <div className="h-64 w-7/12 dark:bg-gray-700 -mr-4 flex flex-linear rounded-2xl ">
          <div className="pt-10 pr-4 pl-0">
            <div className="p-4 ">
              <h1 className="text-gray-500 dark:text-gray-300">Language:</h1>
              <h1 className="text-gray-700 dark:text-gray-400">
                {props.original_language.toUpperCase()}
              </h1>
            </div>
            <div className="p-4">
              <h1 className="text-gray-500 dark:text-gray-300">RunTime:</h1>
              <h1 className="text-gray-700 dark:text-gray-400">{RT}</h1>
            </div>
          </div>
          <div className="pt-10 pl-5">
            <div className="p-4">
              <h1 className="text-gray-500 dark:text-gray-300">Status:</h1>
              <h1 className="text-gray-700 dark:text-gray-400">
                {props.status}
              </h1>
            </div>
            <div className="p-4">
              <h1 className="text-gray-500 dark:text-gray-300">
                Date Released:
              </h1>
              <h1 className="text-gray-700 dark:text-gray-400">
                {props.first_air_date}
                {props.release_date}
              </h1>
            </div>
          </div>
          <div className="pt-10 pl-5">
            <div className="p-4">
              <h1 className="text-gray-500 dark:text-gray-300">Seasons:</h1>
              <h1 className="text-gray-700 dark:text-gray-400">
                {props.number_of_seasons}
              </h1>
            </div>
            <div className="p-4">
              <h1 className="text-gray-500 dark:text-gray-300">Episodes:</h1>
              <h1 className="text-gray-700 dark:text-gray-400">
                {props.number_of_episodes}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-50 bg-gray-500"></div>
    </div>
  );
};
