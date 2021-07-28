import React from "react";
import { CastImg } from "./CastImg";
import MovieCast from "./MovieCast";
import TvCast from "./TvCast";

interface Cast {
  Id?: any;
  biography?: any;
  name?: any;
  birthday?: any;
  known_for_department?: any;
  data?: any;
}

export const CastItem = (props: Cast) => {
  console.log(props.data);
  return (
    <div>
      <div className="flex flex-col md:flex-row md:place-content-center place-content-start mt-16 md:ml-20 ml-0">
        <div className="flex place-content-center md:place-content-start min-w-max">
          <CastImg id={props.Id} />
        </div>
        <div className="ml-10">
          <h1 className="text-4xl mt-2 font-medium text-gray-700 dark:text-gray-200">
            {props.name}
          </h1>
          <h1 className="flex place-content-center text-justify text-gray-500 font-medium dark:text-gray-400 text-xs w-96 md:w-auto mt-3 mr-10 md:mr-20">
            {props.biography}
          </h1>
        </div>
      </div>
      <div className="mt-20">
        <p className="text-2xl mt-7 ml-32 text-gray-600 dark:text-gray-200">
          Movies
        </p>
        <MovieCast ID={props.Id} Type="person" />
      </div>
      <div className="mt-10">
        <p className="text-2xl mt-7 ml-32 text-gray-600 dark:text-gray-200">
          Tv Shows
        </p>
        <TvCast ID={props.Id} Type="person" />
      </div>
    </div>
  );
};
