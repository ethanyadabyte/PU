import React from "react";

interface Movie {
  poster_path?: string;
  original_title?: string;
  original_name?: string;
  overview: string;
}

export const Item = (props: Movie) => {
  return (
    <div className=" flex justify-left mt-16 ml-10 text-gray-200  ">
      <img
        className=" rounded-lg  "
        src={"https://image.tmdb.org/t/p//w342" + props.poster_path}
        alt=""
      />
      <div className="  ">
        <p className="text-4xl mt-2 ml-5  font-medium ">
          {props.original_title}
          {props.original_name}
        </p>
        <p className="text-xs h-44 ml-5  overflow-hidden mx-3 mt-3 text-justify">
          {props.overview}
        </p>
      </div>
    </div>
  );
};
