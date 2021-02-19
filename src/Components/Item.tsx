import React from "react";

interface Movie {
  poster_path?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  first_air_date?: string;
  release_date?: string;
  status?: string;
  original_language?: string;
  runtime?: string;
  budget?: string;
  revenue?: string;
  vote_average?: string;
}

export const Item = (props: Movie) => {
  let A = props.runtime;
  let B = Number(A) + 0.4;
  let C = B / 60;
  let D = C.toString();
  let H = D[0];
  let X = D.length;
  let F = D.slice(2, X);
  let G = Number(F) * 60;
  let O = G.toString();
  let P = props.vote_average;
  let M;
  console.log(P);
  if (O.length > 3) {
    M = "".concat(O[0], O[1]);
  } else {
    M = O[0];
  }
  let R = "".concat(H, "h", " ", M, "m");

  return (
    <div className="flex justify-left mt-16 ml-10 w-11/12  text-gray-200 bg-gray-700 ">
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
        <p className="text-justify text-gray-400 text-xs w-8/12 mt-3">
          {props.overview}
        </p>
        <p className="text-xl mt-4 text-gray-400"></p>
        <div className="flex">
          <p className="h-10 w-20 rounded-2xl text-2xl bg-blue-500 mt-8 mb-0 pt-0.5 text-center  ">
            {"Play"}
          </p>
        </div>
        <div className="h-64 w-7/12 bg-gray-700 -mr-4 flex flex-linear rounded-2xl ">
          <div className="pt-10 pr-4 pl-0">
            <div className="p-4 ">
              <h1 className="">Language:</h1>
              <h1 className="text-gray-400">
                {props.original_language.toUpperCase()}
              </h1>
            </div>
            <div className="p-4">
              <h1 className="">Time:</h1>
              <h1 className="text-gray-400">{R}</h1>
            </div>
          </div>
          <div className="pt-10 pl-5">
            <div className="p-4">
              <h1 className="">Status:</h1>
              <h1 className="text-gray-400">{props.status}</h1>
            </div>
            <div className="p-4">
              <h1 className="">Date Released:</h1>
              <h1 className="text-gray-400">
                {props.first_air_date}
                {props.release_date}
              </h1>
            </div>
          </div>
          <div className="pt-10 pl-5">
            <div className="p-4">
              <h1 className="">Budget:</h1>
              <h1 className="text-gray-400">{props.budget}</h1>
            </div>
            <div className="p-4">
              <h1 className="">Revenue:</h1>
              <h1 className="text-gray-400">{props.revenue}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-50 bg-gray-500"></div>
    </div>
  );
};
