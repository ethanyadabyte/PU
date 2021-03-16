import React from "react";
import { Link } from "react-router-dom";

interface Movie {
  poster_path: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  id: string;
}

interface MovieRowProps {
  results: Movie[];
}

export const TvRow = (props: MovieRowProps) => {
  return (
    <div className="  overflow-x-auto w-auto mx-44 rounded-2xl">
      <ul className="flex flex-linare">
        {props.results.map((movie) => (
          <Link to={`/Item/${movie.id}/tv`}>
            <li className="mb-4  flex hide text-transparent hover:text-gray-200 w-52 h-70 rounded-lg ml-8 ">
              <img
                className="w-52 h-70 rounded-lg"
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
    </div>
  );
};
