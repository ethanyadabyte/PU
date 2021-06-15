import React from "react";
import { Grid1 } from "../Components/Container/All/Grid1";
import { SearchBoxD } from "../Components/Container/All/SearchboxD";
import { StorageIcon } from "../Components/Icons/StorageIcon";

export default {
  title: "Components/Grid",
  component: Grid1,
};

export const Grid1Story = () => {
  const Load = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  return (
    <div className="bg-gray-700">
      <div className="h-20bg-gray-700 p-4">
        <div className="flex justify-between py-5">
          <div className="flex">
            <div className=" mr-10 ml-14">
              <StorageIcon />
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-baseline space-x-4">
                <li className="text-red-500 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium ">
                  Movies
                </li>

                <li className="text-red-500 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  Shows
                </li>

                <li className="text-pink-600 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  Library
                </li>

                <li className="text-pink-600 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  Feed
                </li>

                <li className="text-pink-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  About
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex">
              <SearchBoxD />
              <button className="mx-14 text-blue-500 hover:text-gray-400 focus:outline-none text-xl">
                SignIn
              </button>
            </div>
          </div>
        </div>
      </div>

      <Grid1 results={Load.}/>
    </div>
  );
};
