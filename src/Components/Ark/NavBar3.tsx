import React from "react";
import { StorageIcon } from "./Icons/StorageIcon";
import { SearchBoxD } from "../Components/SearchBoxD";

export const NavBar3 = () => {
  return (
    <div className="h-20 bg-gray-700 ">
      <div className="flex justify-between py-5">
        <div className="flex">
          <div className=" mr-10 ml-14">
            <StorageIcon />
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-baseline space-x-4">
              <li className="text-gray-400 hover:text-gray-400 px-3 py-2 rounded-md text-xl t font-medium ">
                Movies
              </li>
              <li className="text-gray-400 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                Shows
              </li>
              <li className="text-gray-400 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                Library
              </li>
              <li className="text-gray-400 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                Feed
              </li>
              <li className="text-gray-400 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                About
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden smc:block">
          <div className="flex">
            <SearchBoxD />
            <button className="mx-14 text-blue-500 hover:text-gray-400 focus:outline-none text-xl">
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
