import React from "react";
import { Link } from "react-router-dom";

interface Info {
  Title?: any;
  Title1?: any;
  Title2?: any;
  Img?: any;
  OverView?: any;
  id?: any;
  Type?: any;
}

export const GridItem = (props: Info) => {
  let A = props.Type;
  let B =
  if (props.Type === undefined && props.Title != undefined) {
    A = "movie";
  }
  if (props.Type === undefined && props.Title1 != undefined) {
    A = "tv";
  }
  return (
    <Link to={`/Item/${props.id}/${A}`}>
      <div
        className="w-220 h-330 m-0 md:mx-4 lg:mx-4 xl:mx-4 2xl:mx-4 shadow-2xl dark:shadow-none rounded-md
      "
      >
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.Img}`}
          className="rounded-md absolute"
        />
        <div className="rounded-md absolute w-220 h-330 opacity-0 bg-black hover:opacity-80">
          <h1 className="text-base text-gray-200 mt-2 mx-2 text-center font-medium ">
            {props.Title}
            {props.Title1}
            {props.Title2}
          </h1>
          <p className="text-xs m-3 h-44 overflow-hidden text-justify text-white  ">
            {props.OverView}
          </p>
        </div>
      </div>
    </Link>
  );
};

//Loki

//rX1wQMTKFqF0gvZyS0DDQqgnQPB.jpg

/*After stealing the Tesseract during the events of “Avengers: Endgame,”
an alternate version of Loki is brought to the mysterious Time
Variance Authority, a bureaucratic organization that exists outside of
time and space and monitors the timeline. They give Loki a choice:
face being erased from existence due to being a “time variant”or help
fix the timeline and stop a greater threat.*/

//bg-black hover:opacity-80
