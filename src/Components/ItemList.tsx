import React from "react";
import { Link } from "react-router-dom";
import { ItemImg } from "./ItemImg";

interface Movie {
  poster_path?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  id?: string;
  media_type?: string;
  profile_path?: string;
  name?: string;
}

interface MovieListProps {
  results: Movie[];
}

export const ItemList = (props: MovieListProps) => {
  return (
    <ul className="grid xl:grid-cols-5 lg:grid-cols-4 gap-none w-auto pl-4 bg-gray-700">
      {props.results.map((movie) => (
        <Link to={`/Item/${movie.id}/${movie.media_type}`}>
          <li className="my-4 flex hide text-transparent hover:text-gray-200 w-52 h-70 rounded-lg ml-2 ">
            <img
              className="w-52 rounded-lg "
              src={ItemImg(
                movie.profile_path,
                movie.poster_path,
                movie.media_type
              )}
              alt=""
            />
            <div className="w-52 h-70 hover:bg-gray-600 -ml-52  rounded-lg text-center ">
              <p className="text-base mt-2 mx-2  font-medium ">
                {movie.original_title}
                {movie.original_name}
                {movie.name}
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
