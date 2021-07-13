import React from "react";
import { CastImg } from "./CastImg";

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
    <div className="flex justify-left mt-16 ml-10 text-gray-200">
      <div className="">
        <CastImg id={props.Id} />
      </div>
      <div className="flex flex-col ml-10 mt-3">
        <h1 className="text-4xl mt-2 font-medium text-gray-700 dark:text-gray-200">
          {props.name}
        </h1>
        <h1 className="text-justify text-gray-500 font-medium dark:text-gray-400  text-xs w-96 mt-3">
          {props.biography}
        </h1>
      </div>
    </div>
  );
};
