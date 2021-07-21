import React from "react";
import { Link } from "react-router-dom";

interface SeasonsProps {
  Seasons: any;
}

export const Seasons = (props: SeasonsProps) => {
  return (
    <div className="w-auto mx-36 mt-4 mb-4">
      <ul className="grid grid-cols-7">
        {props.Seasons.map((Season) => (
          <Link to={`/item/${Season.id}/person`}>
            <li className="my-4 px-8 h-auto text-gray-500 dark:text-gray-200 rounded-lg ml-1 h-">
              <img
                className="rounded-lg shadow-2xl"
                src={"https://image.tmdb.org/t/p/w185" + Season.poster_path}
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
