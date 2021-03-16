import React from "react";
import { Link } from "react-router-dom";

interface Movie {
  poster_path: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  id: string;
}

interface MovieListProps {
  results: Movie[];
}

export const MovieList = (props: MovieListProps) => {
  return (
    <ul className="grid grid-cols-5 gap-none w-auto pl-4 bg-gray-700">
      {props.results.map((movie) => (
        <Link to={`/Item/${movie.id}/movie`}>
          <li className="my-4 flex hide text-transparent hover:text-gray-200 w-52 h-70 rounded-lg ml-2 ">
            <img
              className="w-52 h-70 rounded-lg  "
              src={
                "https://image.tmdb.org/t/p/w220_and_h330_face" +
                movie.poster_path
              }
              alt=""
            />
            <div className="w-52 h-70 hover:bg-gray-600 -ml-52  rounded-lg text-center ">
              <p className="text-base mt-2 mx-2  font-medium ">
                {movie.original_title}
                {movie.original_name}
              </p>
              <p className="text-xs h-44  overflow-hidden mx-3 mt-3 text-justify">
                {movie.overview}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
