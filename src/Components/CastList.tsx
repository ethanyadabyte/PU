import React from "react";

interface Cast {
  profile_path: string;
  name?: string;
  character?: string;
}

interface CastProps {
  results: Cast[];
}

export const CastList = (props: CastProps) => {
  return (
    <ul className="flex flex-linare ml-24  ">
      {props.results.map((cast) => (
        <li className="my-4 px-10 text-gray-200 rounded-lg ml-2 ">
          <img
            className="h- rounded-2xl "
            src={"https://image.tmdb.org/t/p/w154" + cast.profile_path}
            alt=""
          />
          <div className="ml-2">
            <p className="text-base mt-2 w-32 p-0 font-medium ">
              {cast.character}
            </p>
            <p className="text-base w-32 ">{cast.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
