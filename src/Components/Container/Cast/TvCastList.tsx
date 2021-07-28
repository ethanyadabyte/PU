import React from "react";
import { Link } from "react-router-dom";

interface Cast {
  poster_path: string;
  name?: string;
  character?: string;
  id?: any;
  original_name?: any;
}

interface CastProps {
  results: Cast[];
}

export const TvCastList = (props: CastProps) => {
  return (
    <div>
      <div className="scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-800 scrollbar-track-rounded-sm scrollbar-thumb-rounded-sm w-auto mx-36 mt-4 mb-4">
        <ul className="flex flex-linare">
          {props.results.map((cast) => (
            <Link to={`/item/${cast.id}/tv`}>
              <li className="my-4 px-8 text-gray-500 dark:text-gray-200 rounded-lg ml-1">
                <img
                  className="rounded-2xl shadow-2xl"
                  src={"https://image.tmdb.org/t/p/w154" + cast.poster_path}
                  alt=""
                />
                <div className="ml-2 mb-6">
                  <p className="text-base mt-2 w-32 p-0 font-medium">
                    {cast.original_name}
                  </p>
                  <div className="w-40"></div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
