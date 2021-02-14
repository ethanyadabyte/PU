import React from "react";

interface Movie {
  poster_path?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
}

export const Item = (props: Movie) => {
  return (
    <div className=" flex justify-left mt-16 ml-10 text-gray-200 bg-gray-700 ">
      <img
        className=" rounded-lg  "
        src={"https://image.tmdb.org/t/p//w342" + props.poster_path}
        alt=""
      />
      <div className=" ml-10 mt-3 ">
        <p className="text-4xl mt-2   font-medium ">
          {props.original_title}
          {props.original_name}
        </p>
        <p className="text-justify text-xs w-7/12   mt-3 ">{props.overview}</p>
      </div>
    </div>
  );
};
