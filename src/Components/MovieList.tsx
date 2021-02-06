import React from "react";

interface Movie {
  poster_path: string;
  original_title: string;
  /*overview: string;*/
}

interface MovieListProps {
  results: Movie[];
}

export const MovieList = (props: MovieListProps) => {
  return (
    <ul className="grid grid-cols-6 gap-none mt-10 mx-20 ml-32">
      {props.results.map((movie) => (
        <li className="my-4 flex hide text-transparent hover:text-white hover:bg-gray-300 w-56 h-70 rounded-lg">
          <img
            className="h-70 rounded-lg  "
            src={
              "https://image.tmdb.org/t/p/w220_and_h330_face" +
              movie.poster_path
            }
            alt=""
          />
          <div className="-ml-44 mt-2">
            <p className="text-base   w-32 font-medium ">
              {movie.original_title}
            </p>
            {/*<p className="text-sm text-gray-500">{movie.overview}</p>*/}
          </div>
        </li>
      ))}
    </ul>
  );
};

/*
 Build 2
import React from "react";

interface Movie {
  poster_path: string;
  original_title: string;
  overview: string;
}

interface MovieListProps {
  results: Movie[];
}

export const MovieList = (props: MovieListProps) => {
  return (
    <ul className="">
      {props.results.map((movie) => (
        <li className="py-4 flex">
          <img
            className="h-32 rounded"
            src={
              "https://image.tmdb.org/t/p/w220_and_h330_face" +
              movie.poster_path
            }
            alt=""
          />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">
              {movie.original_title}
            </p>
            <p className="text-sm text-gray-500">{movie.overview}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};*/

/*
First Build

import React from "react";

interface Movie {
  poster_path: string;
  original_title: string;
  overview: string;
}

interface MovieListProps {
  results: Movie[];
}

export const MovieList = (props: MovieListProps) => {
  return (
    <ul className="divide-y divide-gray-200">
      {props.results.map((movie) => (
        <li className="py-4 flex">
          <img
            className="h-32 rounded"
            src={
              "https://image.tmdb.org/t/p/w220_and_h330_face" +
              movie.poster_path
            }
            alt=""
          />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">
              {movie.original_title}
            </p>
            <p className="text-sm text-gray-500">{movie.overview}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
*/
