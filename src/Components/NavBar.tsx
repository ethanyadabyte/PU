import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StorageIcon } from "./Icons/StorageIcon";
import { SearchBox } from "./SearchBox";
import { SearchBoxD } from "./SearchBoxD";
//import { Search, SearchPage } from "../Pages/SearchPage";
export interface NavBarProps {
  Search: string;
  SearchQuery?: (search: string) => void;
}

export const NavBar = (props: NavBarProps) => {
  const [search, setSearch] = useState(props.Search);

  return (
    <div className="h-20 bg-gray-700 p-4">
      <div className="flex justify-between py-5">
        <div className="flex">
          <div className=" mr-10 ml-14">
            <Link to="/MoviesPage">
              <StorageIcon />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-baseline space-x-4">
              <Link to="/MoviesPage">
                <li className="text-red-500 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium ">
                  Movies
                </li>
              </Link>
              <Link to="/ShowsPage">
                <li className="text-red-500 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  Shows
                </li>{" "}
              </Link>
              <li className="text-pink-600 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                Library
              </li>
              <Link to="/Feed">
                <li className="text-pink-600 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                  Feed
                </li>
              </Link>
              <li className="text-pink-700 hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium">
                About
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex">
            <Link to="/SearchPage">
              <SearchBox value={search} onChange={setSearch} />
            </Link>
            {props.SearchQuery(search)}
            <button className="mx-14 text-blue-500 hover:text-gray-400 focus:outline-none text-xl">
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
