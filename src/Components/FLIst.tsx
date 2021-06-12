import React from "react";

interface Props {
  Load: any;
}

export const FList = (props: Props) => {
  return (
    <ul className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-4">
      {props.Load.map((movie) => (
        <div className="my-3">
          <div className="w-52 h-72 rounded-md animate-pulse bg-gray-600 mx-2"></div>
        </div>
      ))}
    </ul>
  );
};
