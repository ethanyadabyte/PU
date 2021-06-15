import React, { useState } from "react";
import { StorageIcon } from "./Icons/StorageIcon";
import { SearchBoxD } from "./SearchBoxD";

export const NavBar2 = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-gray-700 rounded-md p-3 ml-14 mr-10 pt-7">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="ml-2 ">
                <StorageIcon />
              </div>
            </div>
            <div className="hidden md:block mr-96">
              <ul className="ml-10 flex items-baseline space-x-4">
                <li className="text-red-500 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium ">
                  Movies
                </li>
                <li className="text-red-500 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  Tv Shows
                </li>
                <li className="text-pink-600 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  Feed
                </li>
                <li className="text-pink-600 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  List
                </li>

                <li className="text-pink-700 hover:bg-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  About
                </li>
              </ul>
            </div>
            <div className=" ml-96">
              <SearchBoxD value={search} onChange={setSearch} />
            </div>
          </div>
          <button className="bg-transparent p-1 ml-0 rounded-full text-blue-500 hover:text-gray-400 focus:outline-none focus:ring-none text-xl">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};
