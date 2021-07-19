import React from "react";
import { Link } from "react-router-dom";

interface SeasonsProps {
  Seasons: any;
}

export const Seasons = (props: SeasonsProps) => {
  return (
    <div className="scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-800 scrollbar-track-rounded-sm scrollbar-thumb-rounded-sm w-auto mx-36 mt-4 mb-4">
      <ul className="flex flex-linare">
        {props.Seasons.map((Season) => (
          <Link to={`/item/${Season.id}/person`}>
            <li className="my-4 px-8 text-gray-500 dark:text-gray-200 rounded-lg ml-1">
              <img
                className="rounded-2xl shadow-2xl"
                src={"https://image.tmdb.org/t/p/w154" + Season.poster_path}
                alt=""
              />
              <div className="ml-2 mb-6">
                <p className="text-base mt-2 w-32 p-0 font-medium">
                  {Season.name}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
