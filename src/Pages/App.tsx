import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MovieList } from "../Components/MovieList";
import { SearchBox } from "../Components/SearchBox";
import { StorageIcon } from "../Components/Icons/StorageIcon";

const queryClient = new QueryClient();

function App() {
  const [search, setSearch] = useState("samurai");
  return (
    <div className="bg-gray-200 p-4 ">
      <QueryClientProvider client={queryClient}>
        <div className="bg-gray-700 rounded-md p-3 mx-10 ">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="ml-2 ">
                    <StorageIcon />
                  </div>
                </div>
                <div className="hidden md:block">
                  <ul className="ml-10 flex items-baseline space-x-4 ">
                    <li className="text-red-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                      Movies
                    </li>
                    <li className="text-red-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                      Tv Shows
                    </li>
                    <li className="text-pink-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                      Feed
                    </li>
                    <li className="text-pink-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                      List
                    </li>
                    <li className="text-pink-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                      About
                    </li>
                  </ul>
                </div>
                <div className=" mr-0">
                  <SearchBox value={search} onChange={setSearch} />
                </div>
              </div>
              <button className="bg-transparent p-1 ml-0 rounded-full text-blue-500 hover:text-gray-300 focus:outline-none focus:ring-none text-xl">
                SignIn
              </button>
            </div>
          </div>
        </div>

        <Search query={search} />
      </QueryClientProvider>
    </div>
  );
}

function Search(props: { query: string }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.query],
    () =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=1&include_adult=false&query=${props.query}`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div className="m-4">
      <MovieList results={data?.results || []} />
    </div>
  );
}

export default App;

/*
Build 2

import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MovieList } from "./Components/MovieList";
import { SearchBox } from "./Components/SearchBox";
import { StorageIcon } from "./Components/StorageIcon";

const queryClient = new QueryClient();

function App() {
  const [search, setSearch] = useState("samurai");
  return (
    <div className="bg-gray-200 p-4 ">
      <QueryClientProvider client={queryClient}>
        <div className="bg-gray-700 rounded-md">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="ml-2 ">
                    <StorageIcon />
                  </div>
                </div>
                <div className="hidden md:block">
                  <ul className="ml-10 flex items-baseline space-x-4 ">
                    <li className="text-red-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Movies
                    </li>
                    <li className="text-red-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Tv Shows
                    </li>
                    <li className="text-pink-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Feed
                    </li>
                    <li className="text-pink-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      List
                    </li>
                    <li className="text-pink-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </li>
                  </ul>
                </div>
                <div className="ml-44">
                  <SearchBox value={search} onChange={setSearch} />
                </div>
              </div>
              <button className="bg-transparent p-1 rounded-full text-blue-500 hover:text-gray-300 focus:outline-none focus:ring-none">
                SignIn
              </button>
            </div>
          </div>
        </div>

        <Search query={search} />
      </QueryClientProvider>
    </div>
  );
}

function Search(props: { query: string }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.query],
    () =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=1&include_adult=false&query=${props.query}`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div className="m-4">
      <MovieList results={data?.results || []} />
    </div>
  );
}

export default App;
*/

/*
First Build

import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MovieList } from "./Components/MovieList";
import { SearchBox } from "./Components/SearchBox";

const queryClient = new QueryClient();

function App() {
  const [search, setSearch] = useState("samurai");
  return (
    <QueryClientProvider client={queryClient}>
      <SearchBox value={search} onChange={setSearch} />
      <Search query={search} />
    </QueryClientProvider>
  );
}

function Search(props: { query: string }) {
  const { isLoading, error, data } = useQuery(
    ["movieSearch", props.query],
    () =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bc7d2aaf31b58d13aba81c2dfa7e88ab&language=en-US&page=1&include_adult=false&query=${props.query}`
      ).then((res) => res.json()),
    {}
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred {JSON.stringify(error)} </div>;

  return (
    <div>
      <MovieList results={data?.results || []} />
    </div>
  );
}

export default App;
*/
