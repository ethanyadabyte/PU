import React from "react";
import { Link } from "react-router-dom";

interface Movie {
  poster_path: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  id: string;
}

interface MovieRowBigProps {
  results: Movie[];
}

export const MovieRowBig = (props: MovieRowBigProps) => {
  return (
    <div className="overflow-x-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-800 scrollbar-track-rounded-sm scrollbar-thumb-rounded-sm w-auto mx-44 rounded-2xl">
      <ul className="flex flex-linare">
        {props.results.map((movie) => (
          <Link to={`/Item/${movie.id}/movie`}>
            <li className="mb-8 flex hide text-transparent hover:text-gray-200 w-96 rounded-lg ml-20 mr-2">
              <img
                className="rounded-lg"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt=""
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
