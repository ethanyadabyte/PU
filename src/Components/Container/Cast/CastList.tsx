import React from "react";
import { Link } from "react-router-dom";

interface Cast {
  profile_path: string;
  name?: string;
  character?: string;
  id?: any;
}

interface CastProps {
  results: Cast[];
}

export const CastList = (props: CastProps) => {
  return (
    <div className="scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-800 scrollbar-track-rounded-sm scrollbar-thumb-rounded-sm w-auto mx-36 mt-4 mb-4">
      <ul className="flex flex-linare">
        {props.results.map((cast) => (
          <Link to={`/item/${cast.id}/person`}>
            <li className="my-4 px-8 text-gray-500 dark:text-gray-200 rounded-lg ml-1">
              <img
                className="rounded-2xl shadow-2xl"
                src={"https://image.tmdb.org/t/p/w154" + cast.profile_path}
                alt=""
              />
              <div className="ml-2 mb-6">
                <p className="text-base mt-2 w-32 p-0 font-medium">
                  {cast.character}
                </p>
                <p className="text-base w-32 text-gray-700 dark:text-gray-400">
                  {cast.name}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
