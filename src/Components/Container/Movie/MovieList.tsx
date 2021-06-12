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
    <ul className="grid mx-36 mt-14 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3  w-auto pl-4 bg-gray-700">
      {props.results.map((movie) => (
        <Link to={`/Item/${movie.id}/movie`}>
          <li className="m-4 flex hide text-transparent hover:text-gray-200 w-52 h-70 rounded-lg">
            <img
              className="w-52 h-70 rounded-lg"
              src={
                "https://image.tmdb.org/t/p/w220_and_h330_face" +
                movie.poster_path
              }
              alt=""
            />
            <div className=" transform -translate-x-52 hover:bg-gray-600 rounded-lg">
              <div className="w-52 h-70   text-center ">
                <p className="text-base mt-2 mx-2  font-medium ">
                  {movie.original_title}
                  {movie.original_name}
                </p>
                <p className="text-xs h-44  overflow-hidden mx-3 mt-3 text-justify">
                  {movie.overview}
                </p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
